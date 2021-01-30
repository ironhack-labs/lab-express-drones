const mongoose = require('mongoose')

const droneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    propellers: {
        type: Number,
    },
    maxSpeed: {
        type: Number,
    }
})

const Drone = mongoose.model("Drone", droneSchema)

module.exports = Drone