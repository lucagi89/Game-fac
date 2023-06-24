import fighters from "./data.js";
import Fighter from "./fighter.js";
import {show, hide, getQuestionsArray, modifyBlackAndWhite} from "./functions.js";

const questionContainer = document.getElementById("question");
const questionForm = document.getElementById("form");
const explaination = document.getElementById("explaination");
const formContainer = document.getElementById("form-container");
const fightBtn = document.getElementById('fight-btn');



let isGetStrengthDisabled = false;
let hasFailedQuestions = false;
let hasBeenExplained = false;
let isGameGoing = false;

let monstersArray = ['witch', 'vampire', 'devil', 'dragon', 'death'];

const warrior = new Fighter(fighters.warrior);
let monster = getNewMonster();

fightBtn.addEventListener("click", fight);
questionForm.addEventListener("submit", handleFormSubmission);
document.getElementById('start-game-btn').addEventListener('click', startGame);

// a function to get a new monster from the array
function getNewMonster() {
    let nextMonsterObj = fighters[monstersArray.shift()]
    return nextMonsterObj ? new Fighter(nextMonsterObj) : {}
}

function enableBarKey(){
  if(isGameGoing){
  document.addEventListener('keydown', (e) => {
    if(e.key === ' '){
      fight();
    }
  })
}
}

function startGame(){
    hide(document.getElementById('start-game'));
    show(document.querySelector('.btns-container'));
    show(fightBtn);
    isGameGoing = true;
    show(fightBtn);
    enableBarKey();
    startMonsterAttack();
    render();
  console.log('game started');
}

function stopGame(){
  hide(fightBtn);
  stopMonsterAttack();
  isGameGoing = false;
}


// functionality for the music button----------------------------
document.getElementById('music-btn').addEventListener("click", handleMusic);
const music = new Audio("./music/background.mp3");
let isMusicClicked = false;
function handleMusic(e){
  if (e.target.id === "music-btn" && !isMusicClicked) {
      isMusicClicked = true;
      document.getElementById("music-btn").textContent = '🔊';
      music.play();
    } else if (e.target.id === "music-btn" && isMusicClicked) {
      isMusicClicked = false;
      document.getElementById("music-btn").textContent = '🔇';
      music.pause();
    }
};
//--------------------------------------------------------------

// functionality for the info button----------------------------
document.getElementById('info-btn').addEventListener("click", handleInfo);

let isInfoShown = false;

function handleInfo(){
    const infoContainer = document.getElementById('info-container');
    if (isInfoShown === false) {
      isInfoShown = true;
      infoContainer.innerHTML =  `
       
      <h2>How the game works...</h2>
      <div>
        <p>Your character is the super warrior</p>
        <p>Press the fight button to attack the monster</p>
        <p>They're gonna attack you back, but if you're faster you'll kill them</p>
        <p>Every time you kill a monster you'll get a new one until you kill them all and win the game</p>
        <p>If during the fight your health bar goes less than 30% you'll have the 
        opportunity to answer three general knowledge questions to get more life and strength</p>
      </div>
  
  `;
      show(infoContainer);
      stopGame();
    }else{
        isInfoShown = false;
        hide(infoContainer);
        if(document.getElementById('start-game').classList.contains('hidden')){
        startGame();
        }

}
console.log(isInfoShown);
}

//--------------------------------------------------------------


// functionality for the stop/play game button----------------------------
document.getElementById('game-btn').addEventListener("click", handleGame);
function handleGame(){
  const gameBtn = document.getElementById('game-btn');
    if(isGameGoing){
        isGameGoing = false;
        stopGame();
        gameBtn.textContent = '▶️';
    }else{
        isGameGoing = true;
        startGame();
        gameBtn.textContent = '⏸';
    }
    modifyBlackAndWhite();
}

//--------------------------------------------------------------

// a function to render the warrior and monster's health bars
function monsterAttack(){
    const monsterAttack = getAttackValue(monster) - warrior.defense;
    warrior.getLifeBar(warrior.damage(monsterAttack));
    gameCheck();
}

//interval section for the monster attacks--------------------
let timeFrame;
let frameCount = 0;
let speed = getMonsterSpeedValue(monster);

function startMonsterAttack(){
    timeFrame = window.requestAnimationFrame(startMonsterAttack);
   if(frameCount < speed/10){
     frameCount++;
   }else{
     monsterAttack();
     frameCount = 0;
     speed = getMonsterSpeedValue(monster);
   }
}

function stopMonsterAttack(){
  cancelAnimationFrame(timeFrame);
}
//------------------------------------------------------------

//to get a random number between the min and max attack values for the carachters
function getAttackValue(obj){
    return Math.floor(Math.random() * (obj.attack[1] - obj.attack[0] + 1)) + obj.attack[0];
}

function getMonsterSpeedValue(obj){
  return Math.floor(Math.random() * (obj.speed[1] - obj.speed[0] + 1)) + obj.speed[0];
}


// a function to execute the warrior attack
function fight(){
    const warriorAttackValue = getAttackValue(warrior);
    if (isGameGoing){
    if (warriorAttackValue > monster.defense) {
    monster.getLifeBar(monster.damage(warriorAttackValue - monster.defense));
    gameCheck();
}}
}


// a function to check the game status and execute the appropriate actions
function gameCheck(){
  if(warrior.health === 0){
    isGameGoing = false;
    alert("You lose");
}else if(warrior.health <= 30 && hasFailedQuestions === false ){ 
    isGameGoing = false;
    getStrength();
}else if(monster.health === 0){
    if(monstersArray.length > 0){
    monster = getNewMonster();
    render();
    }else{
        isGameGoing = false;
       alert("you win");
    }
}
render();
}



let questionsArray = getQuestionsArray();
let formCounter = 0;
let wrongAnswerCounter = 0;

// a function to create a pop up form to get more life and strength when the warrior's health is less than 30
function getStrength(){
  stopMonsterAttack();
  modifyBlackAndWhite();
  if (!isGetStrengthDisabled) {
    questionContainer.innerHTML = "";
    fightBtn.classList.add('hidden');
    formContainer.classList.remove("hidden");
    if(!hasBeenExplained){
    
    explaination.innerHTML = `
    <h2>Answer three questions to get more life and strength...</h2>`
    setTimeout(function(){
      explaination.innerHTML = `
        <h2>...but if you fail to answer correctly at least 2 of them</h2>`
    }, 1000)
    setTimeout(function(){
        explaination.innerHTML = `
        <h2>...You'll have to continue as it is...</h2>`
        hasBeenExplained = true;
    }, 2000)
    setTimeout(function(){
      explaination.innerHTML =''
      questionContainer.innerHTML = questionsArray[formCounter].question;
      show(questionForm)
    }, 3000)
  } else{
      questionContainer.innerHTML = "";
      explaination.innerHTML = `
        <h2>Ok...the fight is getting tougher and you deserve an opportunity to augment your strength even more... </h2>`
    
    setTimeout(function(){
      explaination.innerHTML =''
      questionContainer.innerHTML = questionsArray[formCounter].question;
      show(questionForm)
    }, 2000)
  }
}
}
// store in a constant the letter that is hovered



function handleFormSubmission(event) {
    event.preventDefault();
    const answer = document.querySelector('input[name="answer"]').id;
    const rightAnswer = questionsArray[formCounter].correctAnswer;
    questionForm.reset();
    if (answer === rightAnswer) {
      if (formCounter === 2) {
        hide(formContainer);
        hide(questionForm)
        show(fightBtn);
        modifyBlackAndWhite();
        isGameGoing = true;
        warrior.superPower();
        warrior.superHealth();
        setTimeout(startMonsterAttack, 1000);
        formCounter = 0;
        wrongAnswerCounter = 0;
        questionsArray = getQuestionsArray();
        render();
      } else {
        formCounter++;
        questionContainer.innerHTML = questionsArray[formCounter].question;
      }
    } else {
      wrongAnswerCounter++;
      if (wrongAnswerCounter > 1) {
        hide(formContainer);
        show(fightBtn);
        alert("Sorry, but you have to continue with your own strength");
        modifyBlackAndWhite();
        hasFailedQuestions = true;
        isGetStrengthDisabled = true;
        questionsArray = getQuestionsArray();
        isGameGoing = true;
        setTimeout(startMonsterAttack, 1000);
      } else {
        formCounter++;
        questionContainer.innerHTML = questionsArray[formCounter].question;
      }
    }
  }


function render(){
   document.getElementById("warrior").innerHTML = warrior.getFighterHtml();
    document.getElementById("monster").innerHTML = monster.getFighterHtml(); 
}
// render();

