
const { Schema, model } = require('mongoose');

const dronSchema = new Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number
    },
    {
        timestamps: true
    }
);

module.exports = model('Dron', dronSchema)