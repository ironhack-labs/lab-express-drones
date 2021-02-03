const mongoose = require('mongoose')

const droneScheme = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },

    propellers:{
        type: Number,
        require: true,
    },

    maxSpeed:{
        type: Number,
        required:true
    }
})

const Drone = mongoose.model('Drone', droneScheme)

module.exports = Drone