const mongoose  = require("mongoose");

let DroneSchema = new mongoose.Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

module.exports = mongoose.model('myDrone', DroneSchema)