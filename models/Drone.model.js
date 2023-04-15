// Iteration #1
const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

module.exports = mongoose.model("drone", droneSchema);
