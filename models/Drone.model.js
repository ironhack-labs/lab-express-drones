const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed:Number
});

const droneModel = mongoose.model("drones", droneSchema);
module.exports = droneModel;

