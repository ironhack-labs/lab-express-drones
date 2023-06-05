// Iteration #1
const {Schema, model} = require('mongoose')
 const droneSchema = new Schema (

    {
    name: String,
    propellers: Number,
    maxspeed: Number,


    }
 );
 const Drone = model('Drone', droneSchema);
 module.exports = Drone;
