// Iteration #1
const mongoose      = require("mongoose")


// 2. SCHEMA
const droneSchema=  mongoose.Schema({
    name: String,
    propellers:Number,
    maxSpeed:Number,
      
},{
    timestamps: true // INSERTA EN LA BASE DE DATOS LA FECHA EN QUE FUE CREADA
})



// 3. MODEL
const Drone = mongoose.model("Drone", droneSchema)


// 4. EXPORTACIÓN
module.exports = Drone


