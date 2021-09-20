// Iteration #1

//Importacion

const mongoose          =require("mongoose")

//SCHEMA

const droneSchema       =mongoose.Schema({
    name:String,
    propellers:Number,
    maxSpeed:Number




},{
    timestamp:true //INserta en la base de datos la fecha de creacion
})

//Modelo

const Drone = mongoose.model("Drone",droneSchema)

//Exportacion

module.exports=Drone