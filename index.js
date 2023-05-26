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

console.log(getMonstersArray(fighters));


class Fighter{
    constructor(obj){
        Object.assign(this, obj)

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
}

const warrior = new Fighter(fighters.warrior);
const monster = getNewMonster();


function render(){
   document.getElementById("warrior").innerHTML = warrior.getFighterHtml();
    document.getElementById("monster").innerHTML = monster.getFighterHtml(); 
}

render();