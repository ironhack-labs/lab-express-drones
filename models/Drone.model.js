// Iteration #1
let {Schema, model} = require('mongoose');

let droneSchema = new Schema(
    // Info that is going to be prompt
    {
     name: String, 
     propellers : Number, 
     maxSpeed : Number,
    }, 
    // MongoDB Options
    {
     timestamps: true
    }
);

module.exports = model('Drone', droneSchema);