// Iteration #1
const { mongoose, Schema } = require("mongoose");

//create Schema
const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: {
        type: Number,
        max: 22
    }
});

//Crate model
const Drone = mongoose.model("Drone", droneSchema)

module.exports = Drone; 