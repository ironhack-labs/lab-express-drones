const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const path = require("path");

const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number,
    image: {
      type: String,
      default: "/images/defaultdrone.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Drone", droneSchema);
