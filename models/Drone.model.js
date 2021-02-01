const mongoose = require('mongoose')

const droneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    propellers: {
        type: Number,
        min: 1
    },
    maxSpeed: {
        type: Number,
        max: 40
    }
})

const Drone = mongoose.model('Drone', droneSchema)
module.exports = Drone