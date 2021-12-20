// Iteration #1
const mongoose = require('mongoose');
const Schema = mongoose.Schema (
    { 
        name: {type: String, require: true},
        propellers: {type: Number},
        maxSpeed: {type: Number},
    },
    {
        timestamps: true
    }
);

const Drone = mongoose.model('drones', Schema);
module.exports = Drone; 
