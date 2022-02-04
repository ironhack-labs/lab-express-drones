const { Schema, model } = require('mongoose')


const droneSchema = new Schema(
    {
        name: String,
        propellers: Number,
        maxSpeed: Number

    },
    {
        // ESTO TIENE QUE IR SIEMPRE genera para cada registro su valor de creacion y actualizacion
        timestamps: true
    }
);

module.exports = model('Drone', droneSchema)