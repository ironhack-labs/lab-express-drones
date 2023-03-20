// Iteration #1
const { Schema, model } = require("mongoose");


const dronesSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Drone = model("Drone", dronesSchema);

module.exports = Drone;