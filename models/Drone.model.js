// Iteration #1
const {Schema, model} = require("mongoose");


const DroneSchema = new Schema ({
    
    name: String,
    propellers: String,
    maxSpeed: Number,
},
{
    timestamps: true,
});

module.exports = model("Drone", DroneSchema);