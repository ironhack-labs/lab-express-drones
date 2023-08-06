const { Schema, model } = require('mongoose')

const droneScheme = new Schema(

    {
        name: String,
        propellers: Number,
        maxSpeed: Number

    },

    {
        timestamps: true
    }

);
module.exports = model('Drones', droneScheme)

