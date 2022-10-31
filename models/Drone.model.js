// Iteration #1

const {Schema, model} = require('mongoose');

const droneSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    propellers: {
        type: Number,
        min: 0,
        required: true,
    },
    maxSpeed: {
        type: Number,
        min: 0,
        required: true,
    },
    
},
{
    timestamps: true,
}
);

module.exports = model('Drone', droneSchema);