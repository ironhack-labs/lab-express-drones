// Iteration #1

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const drones = new Schema({
    name: { type: String, require: true },
    propellers: { type: Number },
    maxSpeed: { type: Number }
})


const Droning = mongoose.model('Drone', drones)

module.exports = Droning;