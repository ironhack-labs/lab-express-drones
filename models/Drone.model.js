// Iteration #1
const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const droneSchema = new Schema (
    {
        name: {type: String, required: true},
        propellers: Number,
        maxSpeed: Number,
    }
);

module.exports = model('Drone', droneSchema)