import fighters from "./data.js";
import Fighter from "./fighter.js";
import {show, hide, getQuestionsArray, modifyBlackAndWhite, getNumber} from "./functions.js";

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

const winSound = new Audio('./sounds/win.mp3');

function win(winner){
  startStopGame();
  if(isMusicClicked){
  music.pause();
  winSound.play();
  }
  
  if(modeChosen==='one-player'){
      document.getElementById("fight-container").innerHTML = `<h1 class='won'>You won!</h1>`
      setTimeout(function(){location.reload();}, 9000);


  }else if (modeChosen==='two-players'){
      if(!fightBtn.classList.contains('hidden')){
          hide(fightBtn);}
      document.getElementById("fight-container").innerHTML = `<h1 class='won'>${winner} wins!</h1>`
      setTimeout(function(){location.reload();}, 9000);
      
  }
}

function lose(){
  startStopGame();
  if(isMusicClicked){
    music.pause();
    const loseSound = new Audio('./sounds/lose.wav');
    loseSound.play();
  }
  document.getElementById("fight-container").innerHTML = `<h1 class='lost'>You Lose!</h1>`
  setTimeout(function(){location.reload();}, 6000);
}



document.getElementById('start-game-btn').addEventListener('click', startGame);

function startGame(){
  hide(document.getElementById('start-game'));
  show(document.querySelector('.btns-container'));
  if (modeChosen === 'one-player') {
    enableBarKey();
    show(document.querySelector('#game-btn'));
    
    countDown();
    modifyBlackAndWhite();
    render();
  } else if(modeChosen === 'two-players') {
    initializeChoice();
  }else{
    alert('Please choose a player mode');
    location.reload()
  }
  document.querySelector('header h1').textContent = 'Death Fight';
  show(document.querySelector('#info-btn'));
  show(document.querySelector('footer'))
}

function startStopGame(){
  if(isGameGoing){
    isGameGoing = false;
    hide(fightBtn);
    stopMonsterAttack();
  }else{
    isGameGoing = true;
    show(fightBtn);
    startMonsterAttack();
  }
  modifyBlackAndWhite();
}

// event listener for the btns container 
document.getElementById('btns-container').addEventListener('click', function(e){
  if(e.target.id === 'music-btn'){
    handleMusic(e);
  }else if(e.target.id === 'game-btn'){
    handleGame();
  }else if(e.target.id === 'info-btn'){
    handleInfo();
  }
});

// functionality for the music ----------------------------
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

function warriorSound() {
    if (isMusicClicked && isGameGoing) {
      const randomIndex = Math.floor(Math.random() * warrior.sounds.length);
      const randomSound =new Audio(warrior.sounds[randomIndex]);
      randomSound.play();
    };
  };

function monsterSound(monster) {
  if(isMusicClicked){
    const monsterSound = new Audio(monster.sounds[0]);
    monsterSound.play();
  }
}


//--------------------------------------------------------------

// functionality for the info button----------------------------

let isInfoShown = false;

function handleInfo(mode){
  const infoContainer = document.getElementById('info-container');
  if(modeChosen === 'one-player' || mode === 'one-player' ){
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
      </div>`;

      show(infoContainer);
        if (isGameGoing === true){
          startStopGame();
        }
      
      }else{

      isInfoShown = false;
      hide(infoContainer);
      if(document.getElementById('start-game').classList.contains('hidden')){
        if (isGameGoing === false){
          startStopGame();
        }
      }
      }
  }else if(modeChosen === 'two-players' || mode === 'two-players'){
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
}


//--------------------------------------------------------------


// functionality for the stop/play game button----------------------------
function handleGame(){
  const gameBtn = document.getElementById('game-btn');
    if(isGameGoing){
        gameBtn.textContent = '▶️';
    }else{
        gameBtn.textContent = '⏸';
    }
    startStopGame();
}

//--------------------------------------------------------------


// 1 player mode--------------------------------------------------

let monstersArray = ['troll', 'vampire', 'devil', 'dragon', 'death'];

const warrior = new Fighter(fighters.warrior);
let monster = getNewMonster();



// a function to get a new monster from the array
function getNewMonster() {
    let nextMonsterObj = fighters[monstersArray.shift()];
    setTimeout(monsterSound(nextMonsterObj), 1000);
    return nextMonsterObj ? new Fighter(nextMonsterObj) : {}
}

// use button to fight
fightBtn.addEventListener("click", fight);
// use bar key to fight
function enableBarKey(){
  document.addEventListener('keydown', (e) => {
    if(e.key === ' '){
      fight();
    }
  })
}



// a function to render the warrior and monster's health bars
function monsterAttack(){
    const monsterAttack = getAttackValue(monster) - warrior.defense;
    warrior.getLifeBar(warrior.damage(monsterAttack));
    render();
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
    warriorSound();
    gameCheck();
}}
}

// a function to check the game status and execute the appropriate actions

let helps = 0;

function gameCheck(){
  if(warrior.health === 0){
    lose();
    isGameGoing = false;
}else if(warrior.health <= 30 && hasFailedQuestions === false ){ 
    if (helps < 3){
    getStrength();
    }
}else if(warrior.health <= 10 && warrior.health > 0){
    lastChance();
}else if(monster.health === 0){
    if(isMusicClicked){
      const monsterDead = new Audio(monster.sounds[1]);
      monsterDead.play();
    }
    startStopGame();
    if(monstersArray.length > 0){
    document.getElementById("monster").innerHTML = monster.getDeadHtml();
    setTimeout(function(){
      monster = getNewMonster()
      }, 2500);
      setTimeout(function(){startStopGame();}, 3500);
    }else{
       win();
        isGameGoing = false;
    }
}
render();
}

let lastChanceNumber = 0;

function lastChance(){
  if(lastChanceNumber === 0){
  startStopGame();
  hide(questionForm)
  show(formContainer);
  questionContainer.innerHTML = "";
  const Number = getNumber();
  explaination.innerHTML = `
  <h2>OK, You deserve a last chance to live</h2>`
  setTimeout(function(){
    explaination.innerHTML = `
      <h2>You'll be given a number, whatever number comes out, will be equal to the amount of life added to your Warrior</h2>`
  }, 2000)
  setTimeout(function(){
    explaination.innerHTML = `<h2>You'll get ${Number} life points</h2>`
  }, 4000)
  setTimeout(function(){
        hide(formContainer);
        hide(questionForm)
        startStopGame();
        warrior.health += Number;
        render();
  }, 6000)
  lastChanceNumber++;
  }
}


function countDown(){
  let counter = 3;
  show(formContainer)
  explaination.classList.add('countdown');
  const interval = setInterval(function(){
      if(counter > 0){
        explaination.innerHTML = `
        <p>Get ready to fight in...</p>
        <h1 style=' font-size:200px'>${counter}</h1>`;
      
      counter--;
      }else{
        clearInterval(interval);
        hide(formContainer);
        setTimeout(function(){startStopGame();}, 1000)
      }
    }, 500);
}

// a function to create a pop up form to get more life and strength when the warrior's health is less than 30
function getStrength(){
  explaination.classList.remove('countdown');
  startStopGame();
  if (!isGetStrengthDisabled) {
    questionContainer.innerHTML = "";
    show(formContainer);
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
    const answer = document.querySelector('input[type="radio"]:checked').id;
    const rightAnswer = questionsArray[questionsAskedNum].correctAnswer;
    questionForm.reset();
    if (answer === rightAnswer) {
      if (questionsAskedNum === 2) {
        warrior.superPower();
        warrior.superHealth();
        hide(questionForm);
        countDown();
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
        alert("Sorry, but you have to continue with your own strength");
        hasFailedQuestions = true;
        isGetStrengthDisabled = true;
        questionsArray = getQuestionsArray();
        hide(questionForm);
        countDown();
      } else {
        questionsAskedNum++;
        console.log(questionsAskedNum);
        questionContainer.innerHTML = questionsArray[questionsAskedNum].question;
      }
    }
  }


function render(){
  if(isGameGoing){
   document.getElementById("warrior").innerHTML = warrior.getFighterHtml();
    document.getElementById("monster").innerHTML = monster.getFighterHtml(); 
  }
}



// 2 player game section-------------------------------------------------------------


const characterChoiceContainer = document.getElementById('character-choice-container');

const  allCharactersArray = ['warrior', 'troll', 'vampire', 'devil', 'dragon', 'death'];

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
    countDownnTwo();
  }
}

function countDownnTwo(){
  let counter = 3;
  show(formContainer);
  const countDown = setInterval(function(){
    if(counter === 0){
      clearInterval(countDown);
      renderTwoPlayers();
      hide(formContainer);
    }else{
      formContainer.innerHTML = `
            <p>Get ready to start in...</p>
            <h1 style=' font-size:200px'>${counter}</h1>`;
      counter--;
    }
  }, 1000)
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
    win('Player 2');
    }else if(playerTwo.health <= 0){
    win('Player 1');
    }
    renderTwoPlayers();
  }

});




