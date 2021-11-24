// models/Drone.model.js

// 1 Importaciones 
const mongoose = require('mongoose')


// 2 Schema
//Requisitos para crear un dron
const dronSchema = mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
    image: String,
},
{
    timestamps: true
})

// 3 Modelo
const Dron = mongoose.model('Dron', dronSchema)

// 4 Exportación
module.exports = Dron