// Iteration #1
//1. IMPORTACIONES
const mongoose = require("mongoose")

//2. SCHEMA
//REQUISITOS PARA CREAR UN DRONE
const droneSchema = mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number


},
 {

 timestamps: true 

 } 

)

//3. MODELO
const Drone = mongoose.model("Drone", droneSchema)

//4. EXPORTACION
module.exports = Drone