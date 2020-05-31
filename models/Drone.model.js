const mongoose = require('mongoose')
const Schema = mongoose.Schema

let DroneSchema = new Schema({
    name: {
        type: String
    },
    propellers: {
        type: Number
    },
    maxSpeed: {
        type: Number
    }
})

const DroneModel = mongoose.model('DroneModel', DroneSchema )

module.exports = DroneModel;