const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema (
    {
        name: String,
        propellors: Number,
        maxSpeed: Number
    }
)

module.exports = model("Drone", droneSchema)