const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Esquema

const DroneSchema = new Schema({
    name: { type: String, required: true },
    propellers: { type: Number, min: 0, required: true },
    maxSpeed: { type: Number, min: 0, required: true }
})

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;