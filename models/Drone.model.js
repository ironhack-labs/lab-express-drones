// Iteration #1
const mongoose = require('mongoose')

let droneSchema = new mongoose.Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number //mters per seconds   

})

let DroneModel = mongoose.model('drones', droneSchema)

module.exports = DroneModel

