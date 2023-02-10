// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

require('../db')

Drone
    .insertMany(drones)
    .then(drone => console.log(drone))
    .catch(err => console.log(err))
    .finally(mongoose.connection.close())