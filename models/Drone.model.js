// Iteration #1

const { Schema, model } = require('mongoose');

const dronSchema = new Schema(
    {

        name: { type: String },
        propellers: { type: Number },
        maxSpeed: { type: Number },

    })

const dronModel = model('drones', dronSchema);

module.exports = dronModel;