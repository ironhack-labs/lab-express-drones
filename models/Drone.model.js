// Iteration #1
const { Schema, model } = require('mongoose')

const droneSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            default: 'unknown',
            minlength: 2,
            maxlength: 40,
            trim: true,
        },
        propellers: {
            type: Number,
            min: 1,
            max: 100
        },
        maxSpeed: {
            type: Number,
            min: 1
        },
    },
    {
        timestamps: true
    }
)

module.exports = model('drone', droneSchema)