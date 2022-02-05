// Iteration #1

// IMPORT
const mongoose           = require("mongoose");


//SCHEMA
const droneSchema = mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})


//MODEL
const Drone=mongoose.model('Drone',droneSchema)


//EXPORT
module.exports = Drone