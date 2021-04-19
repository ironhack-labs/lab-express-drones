// Iteration #1

const drones = require('../data'); //Requiriendo lo que hay en el fichero data.js
const Drone = require('../models/Drone.model'); //modelo
const mongoose = require('mongoose'); //Paquete para conectarme a la base de datos
const DB_NAME = 'drones-app'; //nombre de la base de datos que se va a crear.

mongoose.connect(`mongodb://localhost/${DB_NAME}`) //Nos conectamos a la base de datos y nos devuelve una promesa.
    .then(() => { // Aquí estamos 100% seguros que estamos conectados a la base de datos.
        console.log('Connected to database');

        Drone.insertMany(drones) //Insertar varios
            .then(drones => {
                console.log(`${drones.length} inserted`) //Cuantos drones tenemos en total.
            })
    })

.catch(error => console.error(error));