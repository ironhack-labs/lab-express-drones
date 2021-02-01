const mongoose = require('mongoose');



const droneSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    propellers:{
        type: Number,
    },
    maxSpeed:{
        type: Number,
    }
});


const Drone = mongoose.model ("Drone", droneSchema)
module.exports = Drone;