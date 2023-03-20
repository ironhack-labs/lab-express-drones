// Iteration #1

const { Schema, model } = require("mongoose");

const droneSchema = {
    name: String,
    propellers: Number,
    maxSpeed: Number
}

const Drone = model("Drone", droneSchema);

module.exports = Drone;