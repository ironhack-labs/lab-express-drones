// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    propellers: {
        type: Number,
        required: true,
    },
    maxSpeed: {
        type: Number,
        required: true,
    },
})

module.exports = model("Drone", droneSchema);
