// Iteration #1
//importaciones
const mongoose = require("mongoose")

//schema
const droneSchema = mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
    imagen: String
})

//modelo
const Drone = mongoose.model("Drone", droneSchema)

//exportacion
module.exports = Drone;