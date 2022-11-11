const mongoose = require('mongoose');
const dronesSchema = new mongoose.Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Drones', dronesSchema);