

class Fighter{
    constructor(obj){
        Object.assign(this, obj);
    }

    getFighterHtml(){
        const {name, image, health, attack, defense} = this;
        return `
            <h2>${name}</h2>
            <p>Attack: ${attack[0]} - ${attack[1]}</p>
            <p>Defense: ${defense}</p>
            <img class = "fighter-img" src=${image} alt="${name}" />
            <div>Health: ${health}</div>
            ${this.getLifeBar(health)}
            `;
        }

    getDeadHtml(){
        const name = this.name;
        return ` <div class='dead-monster'><h1>Congratulations!!! ${name} is dead</h1></div>`;
    }


    getFighterHtmlTwo(player){
        const {name, image, health} = this;
        return `
            <h2>${name}</h2>
            <h3>${player}</h3>
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

    superPower(){
        this.attack[1] += 15;
        return this.attack;
    }

    superHealth(){
        this.health += 50;
        if (this.health >= 100){
            this.health = 100;
        }
        return this.health;
    };
    
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