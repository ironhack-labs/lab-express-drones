const mongoose = require("mongoose");
const { Schema } = mongoose;

const droneSchema = new Schema({
    name: {
        type: String,
        minlength: 1,
        required: true,
    },
    propellers: {
        type: Number,
        min: 0
    },
    maxSpeed: {
        type: Number,
        min: 0
    },
});

module.exports = mongoose.model("Drone", droneSchema);