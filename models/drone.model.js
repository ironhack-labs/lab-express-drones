const mongoose = require("mongoose");
const {
    Schema,
    model
} = mongoose;

const droneSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    propellers: {
        type: Number
    },
    maxSpeed: {
        type: Number
    },



}, {
    timestamps: true
});

exports.Drone = model("Drone", droneSchema);