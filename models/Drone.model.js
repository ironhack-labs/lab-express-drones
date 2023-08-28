// Iteration #1

const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: {
      type: Number,
      min: 0,
      max: 18,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Drone", droneSchema);
