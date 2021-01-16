const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema(
    {
        name: String,
        propellers: { type: Number, min: 0 },
        maxSpeed: { type: Number, min: 0 } 
    },
    {
        timestamps: true,
    }
);

module.exports = model('Drone', droneSchema);
