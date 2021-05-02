//1// Importo todas las librerías necesarias: Mongoose
const mongoose = require('mongoose');

//2// Uso el .Schema() method de Mongoose dentro de 
// una const para generar la referencia a él 
// y luego declaro el nuevo template para declarar 
// mi/s objeto/s dentro
const Schema = mongoose.Schema;
const droneSchema = new Schema ({
    name: { type: String },
    propellers: { type: Number },
    maxSpeed: { type: Number }
});

//3// Uso el mongoose.model() method dentro de una const pasandole 
// como parámetros el modelo y el schema para convertir 
// el schema en un modelo con el cual trabajar luego
const Drone = mongoose.model('Drone', droneSchema);

//4// Uso la propiedad module.exports para exportar el modelo y
// dejarlo preparado para ser instanciarlo en "Documentos"
module.exports = Drone;