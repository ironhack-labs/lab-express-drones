// Iteration #1
const { model, Schema } = require('mongoose')

const droneSchema = new Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number
    },
    {
        timestamps: true
    }
)

module.exports = model('drone', droneSchema)