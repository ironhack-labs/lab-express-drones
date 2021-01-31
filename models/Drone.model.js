const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
    name: {
		type: String,
		required: true,
    },
    propellers: {
        type: Number,
        min:3,
        max:20,
		required: true,
    },
    maxSpeed: {
        type: Number,
        max:100,
		required: true
    },
})

const Drone = mongoose.model("Drone", droneSchema); 
module.exports = Drone; 