// Iteration #1
const {Schema, model} = require ('mongoose');

const droneSchema= new Schema (
    {
        name:String,
        propellers: Number,
        maxSpeed: Number,
    }
);

const User = model("User", droneSchema);

module.exports = User;