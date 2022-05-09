// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number,
    image: String
  },
  { timestamps: true }
);

module.exports = model("Drone", droneSchema);
