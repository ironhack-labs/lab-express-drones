// Iteration #1
const { Schema, model } = require("mongoose");


const droneSchema = new Schema(
  {
    name: String,
    propellers: String,
    maxSpeed: Number
  },
  {
    timestamps: true,
  }
);

const Drone = model("Drone", droneSchema);

module.exports = Drone;