//importaciones

const mongoose = require('mongoose')
const {Schema, model} = mongoose

const droneSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    propellers:Number,
    maxSpeed:{
        type:Number,
        max:18
    }
})

const Drone = model('Drone', droneSchema)

//exportacion

module.exports = Drone