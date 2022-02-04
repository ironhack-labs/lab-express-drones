// Iteration #1
// requerir mongoose
const mongoose = require('mongoose')

// hacer un nuevo mongoose.Schema
const droneSchema = new mongoose.Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number
    },
    {
        timestamps: true
    })

// crear un mongoose.model
const Drone = mongoose.model('Drone', droneSchema)

// exportar el modelo
module.exports = Drone

