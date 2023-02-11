const { Schema, model } = require('mongoose')

const droneSchema = new Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number
    },
    {
        timesstamps: true
    }
)

module.exports = model('drone', droneSchema)