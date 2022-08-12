// Iteration #1

//Create the drone model

//call the mongoose npm package
const mongoose = require('mongoose');

//create the schema
const Schema = mongoose.Schema;

//Create the Drone Schema

const DroneSchema = new Schema({
    //name of the drone ie General Atomics MQ-9 Reaper
    name: {type: String, required: true},
    //Number (amount of propellers, like 4)
    propeller: Number,
    //Number meters per second for the drone's maximum speed, like 18
    maxSpeed: Number
});

const Drones = mongoose.model('Drones', DroneSchema);

module.exports = Drones;

