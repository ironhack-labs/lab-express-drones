// Iteration #1
//1// Importo todas las librerías necesarias
const mongoose = require('mongoose');
const DB_NAME = 'drones-app';
const Drone = require('../models/Drone.model');
// otro modoes => const drones = [{dron}, {dron}, {dron}]

//2// Uso el .connect() method de Mongoose para conectar mi localhost con la DB
mongoose.connect(`mongodb://localhost/${DB_NAME}`)
    .then(() => {
        console.log('Connected to database');
            //3// Uso el .insertMany() method de Mongoose para sembrar la DB con los objetos drones
        Drone.insertMany(
                    [{
                        name: 'Creeper XL 500',
                        propellers: 3,
                        maxSpeed: 12
                    },
                    {
                        name: 'Racer 57',
                        propellers: 4,
                        maxSpeed: 20
                    },
                    {
                        name: 'Courier 3000i',
                        propellers: 6,
                        maxSpeed: 18
                    }
                ]
            )
            .then((data) => {
                console.log(`Inserted items: ${data.length}`)
                mongoose.connection.close()
            })
        })
        .catch(error => console.log(error))