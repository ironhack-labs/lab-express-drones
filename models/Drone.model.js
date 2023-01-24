// Iteration #1

const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({

    name: {

        type: String,
        required: [true, ' the name is required'] //hay dos campos. En el primero ponemos la required y en el segundo ponemos el mensaje en una cadena.
    }, 

    propellers: {

        type: Number,
        required: [true, ' the number is required']
    },

    maxSpeed: {

        type: Number, 
        required: [true, 'the maxSpedd is required']
    }
    
});


const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone; // esto es para exportar el modelo, un objeto, una funcion, un string..etc