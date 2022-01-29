// Iteration #1
const { Schema, model } = require("mongoose");

const droneSchema = new Schema ({
name:{
    type: String,
    require: true,
},
propellers:{
    type: Number,
    require: true,
},

maxSpeed: {
    type: Number,
    require: true
}

});

const Drone = model("Drone", droneSchema);

module.exports = Drone;