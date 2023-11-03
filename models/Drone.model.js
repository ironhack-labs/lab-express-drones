const { Schema, model, default: mongoose } = require('mongoose')

const droneSchema = mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
},
    {
        timestamps: true
    })

module.exports = model("Drone", droneSchema)