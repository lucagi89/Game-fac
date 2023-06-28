import fighters from "./data.js";
import Fighter from "./fighter.js";
import {show, hide, getQuestionsArray, modifyBlackAndWhite} from "./functions.js";

const modeOptionContainer = document.getElementById("mode-option-container");
const questionContainer = document.getElementById("question");
const questionForm = document.getElementById("form");
const explaination = document.getElementById("explaination");
const formContainer = document.getElementById("form-container");
const fightBtn = document.getElementById('fight-btn');

let isGameGoing = false;
let modeChosen = '';

modeOptionContainer.addEventListener("click", function(e){
    document.querySelectorAll('.selected').forEach(selection => {
        selection.classList.remove('selected');
    });
    
    document.getElementById(e.target.id).classList.add('selected');
    
    modeChosen = e.target.id;
});

function win(){
      if(modeChosen==='one-player'){
        

        document.getElementById("fight-container").innerHTML = ''



      }else if (modeChosen==='two-players'){
      
      
      }
}

function lose(){}



document.getElementById('start-game-btn').addEventListener('click', startGame);

function startGame(){
  hide(document.getElementById('start-game'));
  show(document.querySelector('.btns-container'));
  isGameGoing = true;
  if (modeChosen === 'one-player') {
    modeChosen = 'one-player';
    show(fightBtn);
    enableBarKey();
    setTimeout(startMonsterAttack, 1000);
    render();
  } else if(modeChosen === 'two-players') {
    modeChosen = 'two-players';
    initializeChoice();
  }else{
    alert('Please choose a mode!');
  }
  document.querySelector('header h1').textContent = 'Death Fight';
  show(document.querySelector('#game-btn'));
  show(document.querySelector('#info-btn'));
  show(document.querySelector('footer'))
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
  if(modeChosen === 'one-player'){
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
  }else if(modeChosen === 'two-players'){
      if (isInfoShown === false) {
      isInfoShown = true;
      infoContainer.innerHTML =  `
       
      <h2>How the game works...</h2>
      <div>
        <p>You guys have to attack each other</p>
        <p>Player 1 can use the keys 'a' and 's'</p>
        <p>Player 2 can use the keys 'k' and 'l'</p>
        <p>The first player who finishes the other's energy wins</p>
        <p>Easy peasy lemon squeezy</p>
      </div>
      `;
      show(infoContainer);
      }else{

        isInfoShown = false;
        hide(infoContainer);

      }
    
    
  }
  modifyBlackAndWhite();
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


// 1 player mode--------------------------------------------------

let monstersArray = ['witch', 'vampire', 'devil', 'dragon', 'death'];

const warrior = new Fighter(fighters.warrior);
let monster = getNewMonster();



// a function to get a new monster from the array
function getNewMonster() {
    let nextMonsterObj = fighters[monstersArray.shift()]
    return nextMonsterObj ? new Fighter(nextMonsterObj) : {}
}

// use button to fight
fightBtn.addEventListener("click", fight);
// use bar key to fight
function enableBarKey(){
  if(isGameGoing){
  document.addEventListener('keydown', (e) => {
    if(e.key === ' '){
      fight();
    }
  })
}
}


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

let helps = 0;

function gameCheck(){
  if(warrior.health === 0){
    isGameGoing = false;
    alert("You lose");
}else if(warrior.health <= 30 && hasFailedQuestions === false ){ 
    if (helps < 3){
    isGameGoing = false;
    getStrength();
    }
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
      questionContainer.innerHTML = questionsArray[questionsAskedNum].question;
      show(questionForm)
    }, 3000)
  } else{
      questionContainer.innerHTML = "";
      explaination.innerHTML = `
        <h2>Ok...the fight is getting tougher and you deserve an opportunity to augment your strength even more... </h2>`
    
    setTimeout(function(){
      explaination.innerHTML =''
      questionContainer.innerHTML = questionsArray[questionsAskedNum].question;
      show(questionForm)
    }, 2000)
  }
}

}

// data to handle the form and helps received during the game

let questionsArray = getQuestionsArray();
let questionsAskedNum = 0;
let wrongAnswerCounter = 0;


let isGetStrengthDisabled = false;
let hasFailedQuestions = false;
let hasBeenExplained = false;

questionForm.addEventListener("submit", handleFormSubmission);

function handleFormSubmission(event) {
    event.preventDefault();
    const answer = document.querySelector('input[name="answer"]').id;
    const rightAnswer = questionsArray[questionsAskedNum].correctAnswer;
    questionForm.reset();
    if (answer === rightAnswer) {
      if (questionsAskedNum === 2) {
        hide(formContainer);
        hide(questionForm)
        show(fightBtn);
        modifyBlackAndWhite();
        isGameGoing = true;
        warrior.superPower();
        warrior.superHealth();
        setTimeout(startMonsterAttack, 1000);
        questionsAskedNum = 0;
        wrongAnswerCounter = 0;
        questionsArray = getQuestionsArray();
        helps++;
        render();
      } else {
        questionsAskedNum++;
        questionContainer.innerHTML = questionsArray[questionsAskedNum].question;
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
        questionsAskedNum++;
        questionContainer.innerHTML = questionsArray[questionsAskedNum].question;
      }
    }
  }


function render(){
   document.getElementById("warrior").innerHTML = warrior.getFighterHtml();
    document.getElementById("monster").innerHTML = monster.getFighterHtml(); 
}



// 2 player game section-------------------------------------------------------------


const characterChoiceContainer = document.getElementById('character-choice-container');

const  allCharactersArray = ['warrior', 'witch', 'vampire', 'devil', 'dragon', 'death'];

let fightersIndex = 0;
let player = 'Player 1';


// to get the next character in the array
function getCharacterObj(){
  if (fightersIndex === allCharactersArray.length){
    fightersIndex = 0;
  }else if(fightersIndex < 0){
    fightersIndex = allCharactersArray.length-1;
  }
  let characterObj = fighters[allCharactersArray[fightersIndex]];
 return characterObj;
}


//to render the characer on the screen
function getCharacterChoiceHtml(character){
  const characterChoiceHtml =
  ` <h3>${player}</h3>
    <h2>Choose your character</h2>
    <h4>${character.name}</h4>
    <div class="character-choice-img-container" id="character-choice-img-container">
      <button id='backward'>►</button>
      <img src="${character.image}" alt="${character.name}" class="character-choice-img">
      <button id='forward'>►</button>
    </div>
    <button id="select-character-btn" class="select-character-btn">Select</button>
  `
  return characterChoiceHtml;
}

function initializeChoice(){

  show(characterChoiceContainer);
  characterChoiceContainer.innerHTML = `
  <h1><span style="display:block; margin: 20px auto; font-size: 70px; margin-bottom:20px;">${player}</span>choose your character</h1>`;
  setTimeout(renderCharacterChoice, 1000)
}

function renderCharacterChoice(){
  characterChoiceContainer.innerHTML = getCharacterChoiceHtml(getCharacterObj());
}

// to select the character with the mouse
characterChoiceContainer.addEventListener('click', function(event){
  if(event.target.id === 'forward'){
    fightersIndex++;
      renderCharacterChoice();
    }else if(event.target.id === 'backward'){
      fightersIndex--;
      renderCharacterChoice();
    }else if(event.target.id === 'select-character-btn'){
      selectCharacter();
    }
})

// to select the character with the keyboard
document.addEventListener('keydown', function(event){
  switch(event.key){
    case 'ArrowRight':
      fightersIndex++;
      renderCharacterChoice();
      break;
    case 'ArrowLeft':
      fightersIndex--;
      renderCharacterChoice();
      break;
    case 'Enter':
      selectCharacter();
      break;
  }
})

let chosenCharacters = [];

let playerOne;
let playerTwo;

function selectCharacter(){
  chosenCharacters.push(getCharacterObj());
  if(chosenCharacters.length < 2){
  fightersIndex = 0;
  player = 'Player 2';
  setTimeout(initializeChoice, 200);
  }else{
    hide(characterChoiceContainer);
    player = 'Player 1';
    fightersIndex = 0;
    playerOne = new Fighter(chosenCharacters[0]);
    playerTwo = new Fighter(chosenCharacters[1]);
    renderTwoPlayers();
  }
}




// to render the two players game
function renderTwoPlayers(){

  document.getElementById("warrior").innerHTML = playerOne.getFighterHtmlTwo('Player 1');
  document.getElementById("monster").innerHTML = playerTwo.getFighterHtmlTwo('Player 2');
  
}




document.addEventListener('keydown', function(event){
if(modeChosen === 'two-players'){
  if(event.key === 'a' || event.key === 's'){
  playerTwo.damage(1);
  }else if(event.key === 'k' || event.key === 'l'){
  playerOne.damage(1);
  }
  if(playerOne.health <= 0){
    alert('Player 2 wins');
    }else if(playerTwo.health <= 0){
    alert('Player 1 wins');
    }
  }
  renderTwoPlayers();

});




