const mongoose = require("mongoose");

const dronesSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    propellers : {
        type : Number,
        required : true
    },
    maxSpeed : {
        type: Number,
        required : true
    }
});

const Drone = mongoose.model("Drone", dronesSchema);
module.exports = Drone;