// Iteration #1
const { Schema, model } = require('mongoose');

const droneShema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        propellers: {
            type: Number
        },
        maxSpeed: {
            type: Number,
            max: 18
        }

    },
    { timestamps: true }
)
module.exports = model('Drone', droneShema)