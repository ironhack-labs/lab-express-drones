// Iteration #1
// Make connection with db
require('../db');

// Import neccessary dependencies
const mongoose = require('mongoose');
const DroneModel = require('../models/Drone.model');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

DroneModel.create(drones)
    .then(() => {
        mongoose.connection.close();
        console.log("I run")
    })
    .catch(() => {
        next(`The drone data failed to seed, from: 'drones.seed.js`);
    })