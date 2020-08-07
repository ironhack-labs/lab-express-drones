const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const droneSchema = new Schema(
  { name: String, propellers: Number, maxSpeed: Number },
  {
    timestamps: true, // tells Mongoose to automatically manage createdAt and updatedAt properties on your documents.
  }
);

module.exports = model("Drone", droneSchema);