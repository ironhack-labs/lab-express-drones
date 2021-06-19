// Iteration #1

const mongoose = require("mongoose");
const droneSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    propellers: {
      type: Number,
      required: false,
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

const Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone;
