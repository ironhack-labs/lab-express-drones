const mongoose = require('mongoose')

let DroneSchema = new mongoose.Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number,
    }
)

let DroneModel = mongoose.model('myDrone', DroneSchema)

module.exports = DroneModel