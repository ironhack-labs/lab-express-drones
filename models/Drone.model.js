const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  // TODO: write the schema
  name: { type: String, required: true, unique: true },
  propellers: {
    type: Number,
    required: true,
  },
  maxSpeed: { type: Number },
});

const Drones = mongoose.model("Drones", droneSchema);

module.exports = Drones;
