

const fighters = {
    warrior:{
        name: "Super Warrior",
        image: './images/warrior.png',
        health: 100,
        attack: [10, 20],
        defense: 10,
    },
    witch:{
        name: "Witch",
        image: './images/witch.png',
        health: 100,
        attack: [15, 25], // [min, max
        defense: 5,
        speed: 1000,
    },
    vampire:{
        name: "Vampire",
        image: './images/vampire.png',
        health: 100,
        attack: [17, 30], // [min, max
        defense: 8,
        speed: 800,
    },
    devil:{
        name: "Devil",
        image: './images/devil.png',
        health: 100,
        attack: [20, 35], // [min, max
        defense: 12,
        speed: 700,
    },
    dragon:{
        name: "Dragon",
        image: './images/dragon.png',
        health: 100,
        attack: [25, 40], // [min, max
        defense: 15,
        speed: 600,
    },
    death:{
        name: "Death",
        image: './images/death.png',
        health: 100,
        attack: [30, 50], // [min, max
        defense: 20,
        speed: 500,
    }
}

export default fighters;