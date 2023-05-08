// Iteration #1

// Require Schema and model methods of mongoose
const {Schema, model} = require('mongoose');

const droneSchema = new Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number
    }
);

module.exports = model("Drone", droneSchema);
