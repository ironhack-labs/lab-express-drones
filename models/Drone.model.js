const { Schema, model } = require('mongoose')

const droneSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    propellers: {
        type: Number,
        required: true,
    },
    maxSpeed: {
        type: Number,
    },

},
    { timestamps: true }
)
const Drone = model('drone', droneSchema)
module.exports = Drone