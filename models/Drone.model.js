// Importing Mongoose.
const mongoose = require("mongoose");

// Creating schema.
let DroneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  propellers: { type: Number, required: true },
  maxSpeed: { type: Number, required: true },
});

// Creating model.
let DroneModel = mongoose.model("iDrone", DroneSchema);

// Exporting module.
module.exports = DroneModel;
