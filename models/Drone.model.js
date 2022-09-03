// Iteration #1

const { Schema, model } = require('mongoose')

const dronesSchema = new Schema(
    {
        name: { type: String, required: true, default: 'Drone' },
        propellers: { type: Number, required: true, default: 2 },
        maxSpeed: { type: Number, required: true, max: 20, default: 10 }
    },
    {
        timestamps: true,
    }
)

const DroneModel = model('drones', dronesSchema)

module.exports = DroneModel

