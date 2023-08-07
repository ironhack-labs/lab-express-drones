// Iteration #1
const { Schema, model } = require("mongoose");
const droneSchema = new Schema({
    name: {
        type: String,
    },
    propellers: {
        type: String,
    },
    maxSpeed: {
        type: Number,
    },
});

module.exports = model("Drone", droneSchema);
