const {model, Schema} = require('mongoose')

const droneSchema = new Schema({
    name:String,
    propellers: Number,
    maxSpeed: Number,

})

const Drone = model('Drone', droneSchema)
module.exports = Drone