// Iteration #1

const { Schema, model } = require("mongoose");

const dronesSchema = new Schema(
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

module.exports = model("Drones", dronesSchema);