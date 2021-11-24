//1. IMPORTACIONES
const mongoose = require("mongoose")


//2.SCHEMA
const droneSchema = new mongoose.Schema ({
    name: String,
    propellers: Number,
    propellers: Number,
    image: String
},
{
    timestamps: true // establece fecha en que fue creado (!)
})


//3. MODELO
const Drone = mongoose.model("Drone", droneSchema)


//4. EXPORTACIÓN
module.exports = Drone