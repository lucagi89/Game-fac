
const music = new Audio("./music/background.mp3");
let isMusicClicked = false;

function show(element){
    element.classList.remove("hidden");
  }
function hide(element){
    element.classList.add("hidden");
  }

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


export {show, hide, handleMusic};