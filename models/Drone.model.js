const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    propellers: {
        type: Number,
        required: [true, 'The quantity of propellers is required']
    },
    maxSpeed: {
        type: Number,
    }
})

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;