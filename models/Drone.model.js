// Iteration #1

// initialize Mongoose
const mongoose = require('mongoose');

// build Schema
const Schema = mongoose.Schema;

const droneSchema = new Schema({
    name: {type: String, required: true},
    propellers: {type: Number, required: true},
    maxSpeed: {type: Number, required: true},
});

// create Mongoose model
const Drone = mongoose.model('Drone', droneSchema);

// export model
module.exports = Drone;





