// Iteration #1

const { Schema, model } = require("mongoose");

const drone = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

const Drone = model("Drone", drone);

module.exports = Drone;
