// Iteration #1

// 1. IMPORTACIONES
const mongoose	= require("mongoose")

// 2. SCHEMA
// REQUISITOS PARA CREAR UN LIBRO
const droneSchema = mongoose.Schema({
    image:String,
    name:String,
    propellers:Number,
    maxSpeed:Number
},
{
	timestamps: true // ESTABLECER LA FECHA EN LA CUAL FUE CREADO
})

// 3. MODELO
const Drone = mongoose.model("Drone", droneSchema)

// 4. EXPORTACIÓN
module.exports = Drone