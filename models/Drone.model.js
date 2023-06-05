// Iteration #1
const { Schema, model} = require('mongoose')

const droneSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    propellers: {
        type: Number
    },
    maxSpeed: {
        type: Number
    }
});

module.exports = model('Drone', droneSchema);