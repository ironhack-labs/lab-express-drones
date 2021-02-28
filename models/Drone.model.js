const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
  
});
const droneModel = mongoose.model('drone', droneSchema);
module.exports = droneModel;