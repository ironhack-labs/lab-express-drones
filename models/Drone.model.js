const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DroneSchema = new Schema ({
    name : String,
    propellers : Number,
    maxSpeed : Number
})

const DroneModel = mongoose.model("Drone.model", DroneSchema);

module.exports = DroneModel; 