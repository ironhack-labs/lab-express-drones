// Iteration #1
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const droneSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        propellers: Number,
        maxSpeed: Number,
    }
);

const Drone = model("Drone", droneSchema);

module.exports = Drone;