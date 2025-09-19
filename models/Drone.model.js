// Iteration #1
const mongoose = require('mongoose')

const { Schema, model } = mongoose;

const dronSchema = new Schema (
    {
        name: String,
        propellers: Number,
        maxSpeed: Number,
    },
    {
        timestamp: true
    }
)

module.exports = model('Drone', dronSchema)