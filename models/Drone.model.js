// Iteration #1
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
}, {
    timestamps: true,
});

module.exports = mongoose.model("Drone", droneSchema);