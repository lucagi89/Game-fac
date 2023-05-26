import fighters from "./data";

class Fighter{
    constructor(obj){
        Object.assign(this, obj)

    }

    getFighterHtml(){
        const {name, health, attack, defense} = this;
        return `
            <h3>${name}</h3>
            <div>Health: ${health}</div>
            <div>Attack: ${attack}</div>
            <div>Defense: ${defense}</div>
        
        
    }

}