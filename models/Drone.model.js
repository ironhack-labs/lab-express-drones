const mongoose = require('mongoose');

const dronesSchema = new mongoose.Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number
    }
)

module.exports = mongoose.model('Drone', dronesSchema);