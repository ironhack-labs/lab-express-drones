// Iteration #1
const { Schema, model} = require("mongoose");

const droneSchema = new Schema({
    name: String,
    propeellers: Number,
    maxSpeed: Number
});

const Drone = model("Drone", droneSchema);

module.exports = Drone;