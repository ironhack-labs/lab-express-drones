// Iteration #1
const drones = [
    {
        name: "Atomic Sky Reaper MQ-9",
        propellers: 4,
        maxSpeed: 18
    },
    {
        name: "Terminator Reactor TM-10 Killer",
        propellers: 6,
        maxSpeed: 20
    },
    {
        name: "Amazonian Thunderbolt 3 Basic",
        propellers: 3,
        maxSpeed: 15
    }
]

require('../configs/db.config')
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

Drone.deleteMany()
    .then(() => Drone.create(drones))
    .then(createdDrones => console.log(`${createdDrones.length} drones created!`))
    .catch(error => console.log(`Error while creating a new drone: ${error}`))
    .finally(() => mongoose.connection.close())