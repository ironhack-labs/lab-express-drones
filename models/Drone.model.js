// Iteration #1
const {Schema, model, modelNames} = require('mongoose');

const droneSchema = new Schema ({
    name: String,
    propellers: String,
    maxSpeed: Number,
    takeoffWeight: Number,
    diagonalLength: Number,
    maxFlightTime: Number,
    img: String
}, {
    timestamps: true
});

module.exports = model('Drone', droneSchema);