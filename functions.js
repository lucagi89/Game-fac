
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
        console.log(questionsArray);
    return questionsArray;
}




const elements = document.querySelectorAll('.modify-color');
let isColored = true;
function modifyBlackAndWhite(){
  if(isColored){
  elements.forEach(element => {
    element.classList.add('gray');
});
  isColored = false;
} else{
  elements.forEach(element => {
    element.classList.remove('gray');
});
  isColored = true;
}
}

function getNumber(){
  const number = Math.floor(Math.random() * 90);
  return number;
}




export {show, hide, getQuestionsArray, modifyBlackAndWhite, getNumber};