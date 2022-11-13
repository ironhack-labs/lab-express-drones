const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const droneSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    propellers: {
        type: Number,
        required: true,
    },
    maxSpeed: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
        versionKey: false,
    })

const DroneModel = model("Drone", droneSchema)

module.exports = DroneModel