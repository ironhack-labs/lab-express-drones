const mongoose = require("mongoose");

// Create schema.
let DroneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  propellers: { type: Number, required: true },
  maxSpeed: { type: Number, required: true },
});

// Create your model.
let DroneModel = mongoose.model("iDrone", DroneSchema);

// Export module.
module.exports = DroneModel;
