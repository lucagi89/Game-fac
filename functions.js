
import questions from "./questions.js";


function show(element){
    element.classList.remove("hidden");
  }
function hide(element){
    element.classList.add("hidden");
  }
  
// a function to get three random questions from the questions array
function getQuestionsArray(){
    const questionsArray = new Array(3).fill('').map(() => 
        questions[Math.floor(Math.random() * questions.length)]);
    return questionsArray;
}




const elements = document.querySelectorAll('.modify-color');

function modifyBlackAndWhite() {
  elements.forEach(element => {
    element.classList.toggle('gray');
  });
}

function getNumber(){
  const number = Math.floor(Math.random() * 90);
  return number;
}




export {show, hide, getQuestionsArray, modifyBlackAndWhite, getNumber};