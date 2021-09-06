// Iteration #1

// Schema is the format our DB elements will have 

const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number,
  },
  {
    timestamps: true,
  }
);
module.exports = model("Drone", droneSchema);