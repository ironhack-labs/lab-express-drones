require("../configs/db.config.js");
const droneModel = require("../models/droneModel");

const droneSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  propellers: {
    type: Number,
    max: 6,
  },
  maxSpeed: {
    type: Number,
    max: 20,
  },
});

const DroneModel = mongoose.model("drones.js", droneSchema);
module.export = DroneModel;
