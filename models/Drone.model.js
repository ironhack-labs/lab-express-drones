//IMPORTACIONES
const mongoose          = require('mongoose');
const { Schema, model } = mongoose;

//SCHEMA
const droneSchema = new Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number,
})

//GENERACION DEL MODELO
const Drone = model('Drone', droneSchema)

//EXPORTACIONES
module.exports = Drone 
