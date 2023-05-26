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
    const warriorAttack =  warrior.attack - monster.defense;
    const monsterAttack = monster.attack - warrior.defense;
    warrior.health -= monsterAttack;
    warrior.getLifeBar(warrior.health);
    monster.health -= warriorAttack;
    monster.getLifeBar(monster.health);
    if(warrior.health <= 0){
        endGame();
    }
    if(monster.health <= 0){
        youWin();
        monster = getNewMonster();
    }
    render();
   
}

function youWin(){
    document.getElementById("monster").innerHTML = `
        <img src='${monster.image}' class = 'win-image' alt = '${monster.name}'>
        <div class='win'><h2>You Win! ⚔️</h2></div>
        `;
}



class Fighter{
    constructor(obj){
        Object.assign(this, obj)
        this.health = 100;
    }

    getFighterHtml(){
        const {name, image, health, attack, defense} = this;
        return `
            <h2>${name}</h2>
            <p>Attack: ${attack}</p>
            <p>Defense: ${defense}</p>
            <img class = "fighter-img" src=${image} alt="${name}" />
            <div>Health: ${health}</div>
            ${this.getLifeBar(health)}
            `;
        }
    
    getLifeBar(health){
        if(health < 0){
            health = 0;
        }
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