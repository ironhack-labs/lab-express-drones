// Iteration #1

const { Schema, model } = require('mongoose');

const DronesSchema = new Schema({

    name: {type: String, required: true},
    propellers: {type: Number},
    maxSpeed: {type: Number}
},
    {
        timestamps: true
    })

const DroneModel = model('drones', DronesSchema);

module.exports = DroneModel;