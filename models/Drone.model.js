const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number,
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Drone', droneSchema);