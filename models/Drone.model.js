// Iteration #1
const { default: mongoose } = require("mongoose");
const {Schema, model} = require("mongoose");



const droneSchema = new Schema (
    {
        name: String,
        propellers: Number,
        maxSpeed: Number,
    }
);

const Drone = model("Drone", droneSchema);
module.exports = Drone;