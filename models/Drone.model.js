const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    propellers: Number,
    maxSpeed: Number
});

const DroneModel = mongoose.model("Drone.model", DroneSchema);

module.exports = DroneModel;