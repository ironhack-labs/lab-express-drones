// Iteration #1
const { Schema, model } = require('mongoose')

const droneSchema = new Schema(
    {
        name: {
            type: String
        },

        propellers: {
            type: Number
        },

        maxSpeed: {
            type: Number
        },

    },
    {


        timetamps: true
    }
);

module.exports = model('Drone', droneSchema)








