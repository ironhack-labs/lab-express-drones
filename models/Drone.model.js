const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneModel = new Schema({
    name: {
        type: String,
        required: true
         },
    propellers: Number,
    maxSpeed: Number,
});

const DroneModel = mongoose.model("drone", droneModel);
module.exports = DroneModel;