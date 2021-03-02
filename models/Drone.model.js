const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number

});

const theDroneModel = mongoose.model("Drone", droneSchema);



module.exports = theDroneModel;