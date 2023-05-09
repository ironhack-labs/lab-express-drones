// Iteration #1
// Require Schema and model methods of mongoose
const {Schema, model} = require('mongoose');

const droneSchema = new Schema(
    // Info that is going to be prompt
    {
     name: String, 
     propellers: Number, 
     maxSpeed: Number /// maximum Speed = 18 , meters/second
    }, 
    // MongoDB Options
    {
     timestamps: true
    }
);

module.exports = model('Drone', droneSchema);