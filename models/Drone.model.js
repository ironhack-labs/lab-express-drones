const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema(

    {
        name: String,
        propellers: Number,
        maxSpeed: {
            type: Number
        }
    }
);

module.exports = model('Drone', droneSchema)
