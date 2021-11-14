
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, require: true },
  propellers: { type: Number },
  maxSpeed: { type: Number }
});

module.exports = mongoose.model("Drone", userSchema);