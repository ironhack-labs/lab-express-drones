// Iteration #1

// models/Drone.model.js

const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: String,
},
  {
    timestamps: true,
  }
);

module.exports = model("Drone", droneSchema);