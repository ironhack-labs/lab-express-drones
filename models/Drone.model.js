const { Schema, model } = require('mongoose');

const droneSchema = new Schema ({
    name: { 
        type: String 
    },
    propellers: { 
        type: Number
    },
    maxSpeed: { 
        type: Number
    },
})

const Drones = model('drone', droneSchema);

module.exports = Drones