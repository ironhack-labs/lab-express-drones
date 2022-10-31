// Iteration #1

const {Schema, model} = require('mongoose');

const droneShema = new Schema({
    name: String,
    propellers: Number, 
    maxSpeed: Number,
}, 
{
    timestamps: true,
})


const Drone = model("Drone", droneShema)

module.exports = Drone;