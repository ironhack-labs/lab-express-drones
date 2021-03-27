require('../configs/db.config'); //quando damos require assim, estamos importando uma funcionalidade de um módulo, algo que vai correr assim que for importado
const mongoose = require("mongoose");
const Drone = require('../models/Drone.model');

// Iteration #1
let initialDrones = [
    {
        name: 'discovery',
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: 'enterprise',
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: 'voyager',
        propellers: 4,
        maxSpeed: 20
    },
];

Drone.create(initialDrones).then((data) => {
    console.log(`created ${data.length} drones`)
    mongoose.disconnect();
}).catch(() => {
    console.log('no drone for u')
    mongoose.disconnect();
})