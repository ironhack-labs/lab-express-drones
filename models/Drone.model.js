// Iteration #1

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
    modelName: String,
    Propellers: Number,
    maxSpeed: Number,
})

const Drone = mongoose.model("Drone", droneSchema);
module.exports = Drone;