// Iteration #1

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const droneSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    propellers: {
      type: Number,
      required: true,
    },
    maxSpeed: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Drone", droneSchema);
