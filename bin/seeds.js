// Iteration #1

require("dotenv").config();
require("../configs/db.config.js");

const Drone = require("../models/Drone.model.js");

const drones = [
    {
        name: "General Atomics MQ-9 Reaper",
        propellers: 4,
        maxSpeed: 18
    },
    {
        name: "Parrot Bebop Skycontroller",
        propellers: 4,
        maxSpeed: 46
    },
    {
        name: "Phantom 3",
        propellers: 4,
        maxSpeed: 60
    }
]

Drone.deleteMany().then(
    Drone.create(drones)
        .then(drones => {
            drones.forEach((drone) => {
                console.log('Drone: ' + drone.name)
            })
        })
        .catch(error => {
            console.log('Error: ' + error);
        })
)