// Iteration #1

const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const droneSchema = new Schema(
    {
        name: { type: String },
        propellers: { type: Number },
        maxSpeed: { type: Number, max: 30 },
    });

const DroneModel = model("Drones", droneSchema);




module.exports = DroneModel;