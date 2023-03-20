// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
    {
        name: String,
        propellers: {
            type: Number,
            min: 1
        },
        maxSpeed: Number
    }
);

const Drone = model("Drone", droneSchema);

module.exports = Drone ;