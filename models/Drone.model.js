// Iteration #1

const {Schema, model} = require('mongoose');

const droneSchema = new Schema(
    // Info that is going to be prompt
    {
     name: String, 
     propeller: Number, 
     maxSpeed: Number,
     
    }
);

module.exports = model('Drone', droneSchema);