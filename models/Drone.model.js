const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// const Schema = mongoose.Schema;
// const model = mongoose.model;

const droneSchema = new Schema(
    {
    name: { type: String, required: true },
    // description: { type: String },
    propellers : Number,
    maxSpeed: Number
    },
    {
    timestamps: true
    }
);


module.exports = model("Drone", droneSchema);