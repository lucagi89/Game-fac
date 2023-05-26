import fighters from "./data.js";


function getMonstersArray(fighters){
    const monstersArray = [];
    for(let monster in fighters){
        if(monster !== "warrior"){
            monstersArray.push(monster);
        }
    }
    return monstersArray;
}

function getNewMonster() {
    const monstersArray = getMonstersArray(fighters);
    const nextMonsterObj = fighters[monstersArray.shift()]
    return nextMonsterObj ? new Fighter(nextMonsterObj) : {}
}

document.getElementById("attack").addEventListener("click", attack)

function attack(){
    const warriorAttack = monster.defense - warrior.attack;
    const monsterAttack = warrior.defense - monster.attack;
    warrior.health -= monsterAttack;
    console.log(warrior.health);
    warrior.getLifeBar(warrior.health);
    monster.health -= warriorAttack;
    console.log(monster.health);
    monster.getLifeBar(monster.health);
    if(warrior.health <= 0){
        endGame();
    }
    if(monster.health <= 0){
        alert("You win");
        monster = getNewMonster();
    }
   
}



class Fighter{
    constructor(obj){
        Object.assign(this, obj)
        this.health = this.getLifeBar();
    }

    getFighterHtml(){
        const {name, image, health, attack, defense} = this;
        return `
            <h2>${name}</h2>
            <p>Attack: ${attack}</p>
            <p>Defense: ${defense}</p>
            <img class = "fighter-img" src=${image} alt="${name}" />
            <div>Health: ${health}</div>
            `;
        }
    
    getLifeBar(health){

        return `
            <div class="life-bar">
                <div class="life-bar-inner ${health <= 25? 'dying' :''}" style="width: ${health}%"></div>
            </div>
        `;
    }
}



const warrior = new Fighter(fighters.warrior);
const monster = getNewMonster();


function render(){
   document.getElementById("warrior").innerHTML = warrior.getFighterHtml();
    document.getElementById("monster").innerHTML = monster.getFighterHtml(); 
}

render();