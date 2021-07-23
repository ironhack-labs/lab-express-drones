const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,

});

const Drone = mongoose.model("Drones", droneSchema);

module.exports = Drone;