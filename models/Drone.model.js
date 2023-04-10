// Iteration #1
const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");

const DroneSchema = new Schema ({
    name: String, 
    propellers: Number,
    maxSpeed: Number
})

const DroneModel = mongoose.model('drone', DroneSchema);
module.exports = DroneModel;
