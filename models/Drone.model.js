// Iteration #1

//require Schema and model mongoose methods

const {Schema,model} = require ("mongoose");
const droneSchema = new Schema (
//info that is going to be prompt
    {
    name: String,
    propellers: Number,
    maxSpeed: Number


});

module.exports = model("Drone", droneSchema);