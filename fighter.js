

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

    damage(power){
        this.health -= power;
        if (this.health <= 0){
            this.health = 0;
        }
        return this.health;
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

export default Fighter;