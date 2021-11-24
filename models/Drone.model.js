// Iteration #1

// 1. IMPORTACIONES
const mongoose	= require("mongoose")



// 2. SCHEMA (Requisitos para crear un dron)
const dronSchema = mongoose.Schema({
	name: String,
	propellers: Number,
    maxSpeed: Number,
	img: String

},
{
	timestamps: true // ESTABLECER LA FECHA EN LA CUAL FUE CREADO
})



// 3. MODELO (Se crea el modelo)
const Drone = mongoose.model("Drone", dronSchema)



// 4. EXPORTACIÓN del modelo para utilizarlo en otras partes del proyecto
module.exports = Drone
