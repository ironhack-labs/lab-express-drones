// Iteration #1
const {Schema, model} = require('mongoose')

const droneSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    propellers:{
        type: Number,
        required: true,
    },
    maxSpeed:{
        type: Number,
        required: true,
    }
})

// creamos el modelo con la informacion del sistema = las collections
const Drone = model("Drone", droneSchema)

//exportamos el modulo
module.exports = Drone

