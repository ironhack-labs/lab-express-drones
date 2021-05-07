const mongoose = require("mongoose"); // ODM Object Document Mapper
const Schema = mongoose.Schema;
// the goal of the Schema constuctor is to feed model...
// the Schema is the blueprint : here for each artist that we wanna insert in database
const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

const DroneModel = mongoose.model("drones", droneSchema);
module.exports = DroneModel;
