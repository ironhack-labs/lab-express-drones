const mongoose = require("mongoose")
const droneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
    propellers: {
        type: Number,
        required: true,
    }
    maxSpeed: {
        max: 18,
        required: true,
    }
})

const Drone = mongoose.model("Drone", droneSchema);
module.exports = Drone;