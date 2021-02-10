
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
const Drone= model('Drone', droneSchema) //el 'Drone' de adentro es el nombre del documento que va adentro de la colección de la DB

//4.EXPORTACIÓN
module.exports= Drone