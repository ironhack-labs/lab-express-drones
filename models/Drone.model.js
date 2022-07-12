// Iteration #1

const { Schema, model } = require("mongoose");

const droneSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        propellers: {
            type: Number,
            min: 0
        },
        maxSpeed: {
            type: Number,
            min: 0
        }
    }
)

const Drone = model("Drone", droneSchema);

module.exports = Drone;