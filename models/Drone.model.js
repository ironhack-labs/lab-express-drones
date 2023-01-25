const mongoose = require ('mongoose')

const droneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A name is required for the dron']
    },
    propellers: {
        type: Number,
        required: [true, 'You need a number of propellers']
    },
    maxSpeed: {
        type: Number,
        required: [true, 'You need a maximun speed']
    }
})

const Drone = mongoose.model("Drone", droneSchema)

module.exports = Drone