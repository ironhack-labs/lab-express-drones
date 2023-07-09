// Iteration #1

const mongoose = require('mongoose')

const droneSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Required field'],
        },
        propellers: {
            type: Number,
            required: [true, 'Required field'],
        },
        maxSpeed: {
            type: Number,
            required: [true, 'Required field'],
        }
    },
    {
        timestamps: true,
    }
)

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;