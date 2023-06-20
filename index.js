import fighters from "./data.js";
import Fighter from "./fighter.js";
import questions from "./questions.js";

const music = new Audio("./music/background.mp3");
const questionContainer = document.getElementById("question");
const questionForm = document.getElementById("form");
const explaination = document.getElementById("explaination");
const formContainer = document.getElementById("form-container");
const fightBtn = document.getElementById('fight-btn');
let isGetStrengthDisabled = false;
let hasFailedQuestions = false;
let hasBeenExplained = false;
let monstersArray = ['witch', 'vampire', 'devil', 'dragon', 'death'];


document.addEventListener("click", (e) => {
    if (e.target.id === "music-btn") {
      music.play();
    } else if (e.target.id === "stop-btn") {
      music.pause();
    }
});

// a function to get a new monster from the array
function getNewMonster() {
    let nextMonsterObj = fighters[monstersArray.shift()]
    return nextMonsterObj ? new Fighter(nextMonsterObj) : {}
}

fightBtn.addEventListener("click", fight)

function fight(){
    const warriorAttack =  warrior.attack - monster.defense;
    const monsterAttack = monster.attack - warrior.defense;
    warrior.getLifeBar(warrior.damage(monsterAttack));
    monster.getLifeBar(monster.damage(warriorAttack));
 
    if(warrior.health === 0){
        alert("You lose");
    }else if(warrior.health <= 30 && hasFailedQuestions === false){ 
        getStrength();
    }else if(monster.health === 0){
        if(monstersArray.length > 0){
        monster = getNewMonster();
        render();
        }else{
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


questionForm.addEventListener("submit", handleFormSubmission);


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
        warrior.superPower();
        warrior.superHealth();
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
        hasFailedQuestions = true;
        isGetStrengthDisabled = true;
        questionsArray = getQuestionsArray();
      } else {
        formCounter++;
        questionContainer.innerHTML = questionsArray[formCounter].question;
      }
    }
  }

// a function to get three random questions from the questions array
function getQuestionsArray(){
    const questionsArray = new Array(3).fill('').map(() => 
        questions[Math.floor(Math.random() * questions.length)]);
    return questionsArray;
}


const warrior = new Fighter(fighters.warrior);
let monster = getNewMonster();


function render(){
   document.getElementById("warrior").innerHTML = warrior.getFighterHtml();
    document.getElementById("monster").innerHTML = monster.getFighterHtml(); 
}

function show(element){
  element.classList.remove("hidden");
}
function hide(element){
  element.classList.add("hidden");
}

render();