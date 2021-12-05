// Iteration #1

const { Schema, model } = require("mongoose");

const DronSchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    propellers: Number,
    maxSpeed: {
        type: Number,
        max: 18
    }
}, { timestamps: true })


module.exports = model("Drone", DronSchema);