// Iteration #1
// IMPORTACIONES 
const mongoose = require("mongoose")
// SCHEMA 
const dronSchema = mongoose.Schema({
    name:String,
    propellers:Number,
    maxSpeed:Number,
},{
    timestamps:true
})

// MODEL 
const Drone = mongoose.model("Drone",dronSchema)

// EXPORTACION
module.exports= Drone