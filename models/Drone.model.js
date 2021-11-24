// Iteration #1

// IMPORTACIONES
const mongoose = require("mongoose")


// SCHEMA
const droneSchema =  mongoose.Schema({ //requisitos para crear un libro
    name: String,
    propellers: String,
    maxSpeed: Number,
    image: String
},
{
   timestamps: true //para establecer la  fecha en la cual fue creado 
})

const Drone = mongoose.model("Drone", droneSchema)

module.exports = Drone