"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema,
    model = mongoose.model;
var droneSchema = new Schema({
  name: {
    type: String
  },
  propellers: {
    type: Number
  },
  maxSpeed: {
    type: Number
  }
}, {
  timestamps: true
});
module.exports = model("Drone", droneSchema);