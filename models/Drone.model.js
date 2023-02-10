const { Schema, model } = require('mongoose');

const droneSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
        },
        propellers: {
            type: Number,
            require: true,
        },
        maxSpeed: {
            type: Number,
            require: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = model('drone', droneSchema)