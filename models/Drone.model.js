const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number
    },
    {
        timeStamps: true
    }
);

module.exports = model('Drone', droneSchema);