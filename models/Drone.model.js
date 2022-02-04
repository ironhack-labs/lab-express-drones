// Iteration #1

//importacion
const mongoose = require("mongoose")

// schema

const droneSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    propellers:{
        type: Number,
        required: true
    },
    maxSpeed:{
        type: Number,
        required: true
    }
})

const Drone = mongoose.model("Drone", droneSchema)

module.exports = Drone