const mongoose = require("mongoose");
const { Schema } = mongoose;

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
});

module.exports = mongoose.model("Drone", droneSchema);