// Iteration #1
const {Schema, model} = require('mongoose');

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
})

//exports the model
module.exports = model('Drone', droneSchema);


