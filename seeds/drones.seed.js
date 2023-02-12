// Iteration #1
const mongoose = require("mongoose")

const Drone = require('../models/Drone.model')

require('../db/index')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


Drone
    .insertMany(drones)
    .then(drones => {
        console.log('This drones has been added to the Collection', drones)
    })
    .catch(e => console.log(e))
    .finally(() => mongoose.connection.close())
