// Iteration #1

const mongoose = require("mongoose")

//SCHEMA
const droneSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    propellers: {
        type:Number,
        required: true
    },
    maxSpeed: {
        type:Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})

//MODELO
const Drone = mongoose.model("Drone", droneSchema)

//EXPORTACION
module.exports = Drone