const { Schema, model } = require("mongoose");

const DroneSchema = new Schema (
    {
    name: String,
    propellers: Number,
    maxSpeed: Number,
}
);

const Drone = model("Drone", DroneSchema)

module.exports = Drone;