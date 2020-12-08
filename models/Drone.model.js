const mongoose = require('mongoose')

const dronSchema = new mongoose.Schema({
    name: String, 
    propellers: Number, 
    maxSpeed: Number,
})

module.exports = new mongoose.model("Drone.model", dronSchema)