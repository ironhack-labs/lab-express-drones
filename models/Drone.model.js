// Iteration #1

const { Schema, model } = require("mongoose");

const DronSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: {
        type: Number,
        max: 18
    }
}, { timestamps: true })


module.exports = model("Drone", DronSchema);