
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

// a function to modify the black and white filter on the warrior and monster
function modifyBlackAndWhite(monsterColored) {
  // if monsterColored is true, then only the warrior will be black and white
  if(monsterColored){
    document.getElementById('warrior').classList.toggle('gray');
  }else{
  document.getElementById('warrior').classList.toggle('gray');
  document.getElementById('monster').classList.toggle('gray');
  }
}

function getNumber(){
  const number = Math.floor(Math.random() * 90);
  return number;
}




export {show, hide, getQuestionsArray, modifyBlackAndWhite, getNumber};