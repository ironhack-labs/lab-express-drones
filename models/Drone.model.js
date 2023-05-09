// Iteration #1

const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    //info about the drone that's going to be prompt
    name: String,
    propellers: Number,
    maxSpeed: Number,
  },
  {
    //time-stamps: question, always necessary?
    timestamps: true,
  }
);
module.exports = model("Drone", droneSchema);
