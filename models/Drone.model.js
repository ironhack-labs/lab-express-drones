// Iteration #1
const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
name: {
    type: String,
    required: [true, "Name is required"]
},
propellers: {
    type: Number,
    required: [true, "Number of propellers are required"]
},
maxSpeed: {
    type: Number,
    required: [true, "maxSpeed is required"]
}
})

const Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone;