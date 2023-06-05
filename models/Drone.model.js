const { Schema, model } = require('mongoose');

const droneSchema = new Schema(
  {
    title: String,
    propellers: Number,
    maxSpeed: Number,
  },
);

module.exports = model("Drone", droneSchema);