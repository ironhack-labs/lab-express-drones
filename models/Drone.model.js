const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: { type: String },
        propellers: { type: Number },
        maxSpeed: { type: Number },
    },
    {
        timestamps: true
    }
);

const Drone = model("Drone", userSchema);

module.exports = Drone;
