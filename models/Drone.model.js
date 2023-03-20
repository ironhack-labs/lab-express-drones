// Iteration #1
const {mongoose, Schema } = require('mongoose');

const droneSchema = new Schema({
    name: String, 
    propellers: Number, 
    maxSpeed: Number
})

const Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone;