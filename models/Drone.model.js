// Iteration #1
const { Schema, model } = require('mongoose')


const droneSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        img: String,

        manufacturer: String,
        propellers: Number,

        maxSpeed: {
            type: Number,
            min: 0

        },
        weaponSystems: [String]


    },
    {
        timestamps: true
    }
)

module.exports = model('Drone', droneSchema)