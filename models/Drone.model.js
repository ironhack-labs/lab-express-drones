// Iteration #1

const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    name: {
      type: String, // name of the drone model, like General Atomics MQ-9 Reaper
      unique: true,
    },
    propellers: Number, // amount of propellers, like 4
    maxSpeed: Number,
  }, // meters per second for the drone's maximum speed, like 18
  {
    timestamps: true,
  }
);

const Drone = model("Drone", droneSchema);

module.exports = Drone;
