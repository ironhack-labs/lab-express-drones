// Iteration #1

const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: String,
  maxSpeed: Number,
  propellers: Number,
});

module.exports = model("Drone", droneSchema);



