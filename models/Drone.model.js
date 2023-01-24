// Iteration #1
const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name of the drone is required']
        },
        propellers: {
            type: Number,
            required: [true, 'Number of propellers is required']
        },
        maxSpeed: {
            type: Number,
            required: [true, 'Max speed is required']
        },
    }
)

const Drone = mongoose.model('Drone', droneSchema);
module.exports = Drone;