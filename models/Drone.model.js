// Iteration #1

const { Schema, model } = require('mongoose')

const droneSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        propellers: Number,
        maxSpeed: Number,

    },
    {
        timestamps: true
    }
)


module.exports = model('Drone', droneSchema)