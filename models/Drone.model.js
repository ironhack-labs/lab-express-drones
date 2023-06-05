// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxspeed: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Drone", droneSchema);
