// Iteration #1

const { Schema, model } = require("mongoose");

const Drone = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Drone", Drone);
