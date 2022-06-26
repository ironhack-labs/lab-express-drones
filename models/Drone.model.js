// Iteration #1

const { Schema, model } = require('mongoose');

const dronSchema = new Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number
    }
);

module.exports = model('Dron', dronSchema)