// Iteration #1
const {Schema, model} = require("mongoose")
const Drone = new Schema({
    name :String,
    propellers:Number,
    maxSpeed : Number
})
module.exports = model("drone",Drone)