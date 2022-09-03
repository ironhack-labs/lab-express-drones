// Iteration #1

const { Schema, model } = require("mongoose");

const DroneSchema = new Schema({

    name: { type: String },
    propellers: { type: Number },
    speed: { type: Number }

}, {

    timestamps: true,
})

const DroneModel = model("drones", DroneSchema);
module.exports = DroneModel;


