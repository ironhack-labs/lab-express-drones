// Iteration #1
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

console.log ("in Drone Model JS");

//const Drone = require('./db/models/Drone'); // Assuming you have a model definition in a separate file

// create Schema
const droneSchema = new Schema({
    name: {
        type: String,
        required: true,
        
    },
    propellers: {
        type: Number,
        min: 1,
        max: 10,
    },
    maxSpeed: {
        type: Number,
        default: false
    },

});

// create Model
    const Drone = mongoose.model("Drone", droneSchema);
    console.log ('Hello we have created the database   *** '=Drone.name);
    module.exports = Drone;
    console.log ('Hello database module is exported   *** ');

    