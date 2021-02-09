
//1. IMPORTACIONES
const mongoose= require('mongoose')
const {Schema, model}= mongoose

//2. SCHEMA
const droneSchema= new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

//3. GENERACIÓN DEL MODELO
const Drone= model('Drone', droneSchema)

//4.EXPORTACIÓN
module.exports= Drone