import fighters from "./data.js";

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
const monster = new Fighter(fighters.goblin);


function render(){
   document.getElementById("warrior").innerHTML = warrior.getFighterHtml();
    document.getElementById("monster").innerHTML = monster.getFighterHtml(); 
}

render();