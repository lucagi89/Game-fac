

const fighters = {
    warrior:{
        name: "Super Warrior",
        image: './images/warrior.png',
        health: 100,
        attack: [6, 10],
        defense: 10,
        speed: [500, 1100],
        sounds: ['./sounds/warrior/sword1.wav', 
                './sounds/warrior/sword2.wav',
                './sounds/warrior/sword3.wav',
                './sounds/warrior/sword4.wav',
                './sounds/warrior/sword5.wav',
                './sounds/warrior/warrior.wav',
                ]
    },
    troll:{
        name: "Troll",
        image: './images/troll.png',
        health: 100,
        attack: [5, 13], // [min, max
        defense: 2,
        speed: [700, 1100],
        sounds: ['./sounds/troll/troll.wav',
                './sounds/troll/troll dead.wav',
                ]       
    },
    vampire:{
        name: "Vampire",
        image: './images/vampire.png',
        health: 100,
        attack: [7, 15], // [min, max
        defense: 4,
        speed: [600, 1000],
        sounds: ['./sounds/vampire/vampire.mp3',
                './sounds/vampire/vampire dead.wav',    
                ]
    },
    devil:{
        name: "Devil",
        image: './images/devil.png',
        health: 100,
        attack: [8, 17], // [min, max
        defense: 6,
        speed: [500, 900],
        sounds: ['./sounds/devil/devil.wav',
                './sounds/devil/devil dead.wav',
                ]
    },
    dragon:{
        name: "Dragon",
        image: './images/dragon.png',
        health: 100,
        attack: [10, 20], // [min, max
        defense: 8,
        speed: [400, 800],
        sounds: ['./sounds/dragon/dragon.mp3',
                './sounds/dragon/dragon dead.wav',
                ]
    },
    death:{
        name: "Death",
        image: './images/death.png',
        health: 100,
        attack: [15, 25], // [min, max
        defense: 10,
        speed: [200, 600],
        sounds: ['./sounds/death/death demon.mp3']
    }
}

export default fighters;