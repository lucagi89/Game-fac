import fighters from "./data.js";
import Fighter from "./fighter.js";


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
    }
    if(monster.health === 0){
        if(monstersArray){
        monster = getNewMonster();
        render();
        }else{
           console.log("you win");
        }
    }
    render();
}

function youWin(){
    document.getElementById("monster").innerHTML = `
        <img src='${monster.image}' class = 'win-image' alt = '${monster.name}'>
        <div class='win'><h2>You Win! ⚔️</h2></div>
        `;
}







const warrior = new Fighter(fighters.warrior);
let monster = getNewMonster();


function render(){
   document.getElementById("warrior").innerHTML = warrior.getFighterHtml();
    document.getElementById("monster").innerHTML = monster.getFighterHtml(); 
}

render();