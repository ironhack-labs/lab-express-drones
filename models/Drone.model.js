// Iteración #1
const mongoose = require("mongoose")

//schema
const droneSchema = mongoose.Schema({
    name : String,
    propellers: Number,
    maxSpeed: Number
})

//modelo
const Drone=mongoose.model("Drone", droneSchema)

//exportación
module.exports = Drone