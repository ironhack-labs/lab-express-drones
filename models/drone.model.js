const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema({

    name: {  
        type: String,
        required :' Title is required'
    },
    propellers : {
        type: Number,
        min:0
    },
    maxSpeed:{ 
        type: Number,
        min:0
    }
});




const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;