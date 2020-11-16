const mongoose = require('mongoose')
const { Schema, model } = mongoose
//const Schema = mongoose.Schema

const droneSchema = new Schema({
    name: String, 
    propellers: Number, 
    maxSpeed: Number
}, {
    timestamps: true
}
)


module.exports = model('Drone', droneSchema)