// Iteration #1

const { Schema, model } = require("mongoose");

const droneModel = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

module.exports = model("drone", droneModel);
