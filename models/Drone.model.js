const { Schema, model } = require('mongoose') 

const droneSchema = new Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number,
        image: String
    }
)

module.exports = model('Drone', droneSchema)