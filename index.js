import fighters from "./data.js";
import Fighter from "./fighter.js";
import questions from "./questions.js";

const question = document.getElementById("question");
const questionForm = document.getElementById("question-form");
const formContainer = document.getElementById("form-container");
let monstersArray = ['witch', 'vampire', 'devil', 'dragon', 'death'];


function getNewMonster() {
    let nextMonsterObj = fighters[monstersArray.shift()]
    return nextMonsterObj ? new Fighter(nextMonsterObj) : {}
}

document.getElementById("attack").addEventListener("click", attack)

function attack(){
    const warriorAttack =  warrior.attack - monster.defense;
    const monsterAttack = monster.attack - warrior.defense;
    warrior.getLifeBar(warrior.damage(monsterAttack));
    monster.getLifeBar(monster.damage(warriorAttack));
    
    if(warrior.health === 0){
        console.log("You lose");
    }else if(warrior.health <= 30){
        getSuperHealth();
    }else if(monster.health === 0){
        if(monstersArray){
        monster = getNewMonster();
        render();
        }else{
           console.log("you win");
        }
    }
    render();
}

let formCounter = 0;
let wrongAnswerCounter = 0;

function getQuestionsArray(){
    const questionsArray = new Array(3).fill('').map(() => 
        questions[Math.floor(Math.random() * questions.length)]);
    return answersArray;
}




function getQuestionText(){

        let questionText = getQuestionsArray()[formCounter].question;
        document.getElementById("question").textContent = questionText;
}

questionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formAnswer = new FormData(questionForm)
    const answer = formAnswer.get("yes") ? "yes" : "no";
    if(answer === getQuestionsArray[formCounter].answer){
        if(formCounter === 3){
            getSuperPower();
            getSuperHealth();
        }else{
            formCounter++;
            questionForm.reset();
            getQuestionText();
        }
    }else{
        wrongAnswerCounter++;
        if(wrongAnswerCounter > 1){
            console.log('sorry but you have to continue with your own strength')

        }else{
            formCounter++;
            questionForm.reset();
            getQuestionText();
        }
    }

});

function getSuperHealth(){}
function getSuperPower(){}










const warrior = new Fighter(fighters.warrior);
let monster = getNewMonster();


function render(){
   document.getElementById("warrior").innerHTML = warrior.getFighterHtml();
    document.getElementById("monster").innerHTML = monster.getFighterHtml(); 
}

render();