// Iteration #1
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true, //--> this is going to store info when the book is created and updated
  }
);

const Drone = model("Drone", droneSchema);

module.exports = Drone;
