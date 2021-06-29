// Iteration #1
const {Schema, model} = require("mongoose");
const DroneSchema = new Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number,
}





module.exports = model("Drones", DroneSchema); 
