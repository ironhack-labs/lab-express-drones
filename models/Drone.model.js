// Iteration #1
const mongoose = require('mongoose')

const droneSchema = new mongoose.Schema(
    {
        name: { type: String },
        propellers: { type: Number },
        maxSpeed: { type: Number }

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Drone', droneSchema)
