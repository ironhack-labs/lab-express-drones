// Iteration #1
// Importaciones

const mongoose = require ("mongoose")

// Schema
const droneSchema = mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
    image: String,
})

//Modelos

const Drone = mongoose.model("Drone",droneSchema)

// Exportaciones

module.exports = Drone