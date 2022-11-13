const { Schema, model } = require('mongoose');

const DroneSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    propellers: {
        type: Number,
        required: true
    },
    maxSpeed: {
        type: Number,
        required: true
    }
});

const DroneModel = model('Drone', DroneSchema);
module.exports = DroneModel;