import fighters from "./data.js";
import Fighter from "./fighter.js";
import questions from "./questions.js";


const questionForm = document.getElementById("question-form");
const formContainer = document.getElementById("form-container");
const attackBtn = document.getElementById('attack-btn');
let monstersArray = ['witch', 'vampire', 'devil', 'dragon', 'death'];

// a function to get a new monster from the array
function getNewMonster() {
    let nextMonsterObj = fighters[monstersArray.shift()]
    return nextMonsterObj ? new Fighter(nextMonsterObj) : {}
}

attackBtn.addEventListener("click", attack)

function attack(){
    const warriorAttack =  warrior.attack - monster.defense;
    const monsterAttack = monster.attack - warrior.defense;
    warrior.getLifeBar(warrior.damage(monsterAttack));
    monster.getLifeBar(monster.damage(warriorAttack));
 
    if(warrior.health === 0){
        console.log("You lose");
    }else if(warrior.health <= 30){
        attackBtn.classList.add('hidden');
        getStrength();
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

// a function to create a pop up form to get more life and strength when the warrior's health is less than 30
function getStrength(){
    formContainer.classList.remove("hidden");
    formContainer.innerHTML = `
    <h2>Answer three questions to get more life and strength...</h2>`
    setTimeout(function(){
        formContainer.innerHTML = `
        <h2>...but if you fail to answer correctly at least 2 of them</h2>`
    }, 3000)
    setTimeout(function(){
        formContainer.innerHTML = `
        <h2>...You'll have to continue as it is...</h2>`
    }, 6000)
    setTimeout(function(){
        formContainer.innerHTML = getFormHtml();
    }, 9000)
}

// a function to get three random questions from the questions array
function getQuestionsArray(){
    const questionsArray = new Array(3).fill('').map(() => 
        questions[Math.floor(Math.random() * questions.length)]);
    return questionsArray;
}




function getFormHtml(){
        const questionText = getQuestionsArray()[formCounter].question;

        const formHtml =`
            <form id="question-form" class= "question-form">
                <h2 id="question">${questionText}</h2>
                <label for="yes">Yes</label>
                <input type="checkbox" id="answer" value="yes" >
                <label for="no">No</label>
                <input type="checkbox" id="answer" value="no" >
                <button type="submit">Submit</button>
            </form>`
        
        return formHtml;
}

questionForm.addEventListener("submit", (e) => {
     e.preventDefault();
    const formAnswer = new FormData(questionForm)
    // const answer = formAnswer.get("answer");
    console.log(formAnswer);
    // if(answer === getQuestionsArray()[formCounter].answer){
    //     if(formCounter === 3){
    //         attackBtn.classList.remove('hidden');
    //         getSuperPower();
    //         getSuperHealth();

    //     }else{
    //         formCounter++;
    //         getFormHtml();
    //     }
    // }else{
    //     wrongAnswerCounter++;
    //     if(wrongAnswerCounter > 1){
    //         attackBtn.classList.remove('hidden');
    //         console.log('sorry but you have to continue with your own strength')

    //     }else{
    //         formCounter++;
    //         getFormHtml();
    //     }
    // }

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