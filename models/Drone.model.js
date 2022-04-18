const { Schema, model } = require('mongoose');

const droneSchema = new Schema(
    {
        name: {
            type: String,
            default: "Atomics MQ- 9 Reaper",
        },
        propellers: {
            type: Number,

        },
        maxSpeed: {
            type: Number,

        }

    },
    { timestamps: true }
)

module.exports = model('Drone', droneSchema)