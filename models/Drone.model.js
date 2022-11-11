const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        propellers: Number,
        maxSpeed: Number
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model('Drone', droneSchema);