const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
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

const Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone;