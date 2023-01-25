// Iteration #1
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create the Movie model in the models/Movie.model.js file.
const droneSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    propellers: {
        type: Number,
        required: true
    },
    maxSpeed: {
        type: Number
    },
});

const Drone = mongoose.model("Drone", droneSchema);

// to export the Drone model.
module.exports = Drone;