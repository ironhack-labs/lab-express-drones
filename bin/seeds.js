const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
const DRONES = require('../data/drone.json');

// Conectamos a la base de datos
require('../config/db.config.js');

// Vaciar la BBDD y poner valores por defecto:

mongoose.connection.once('open', () => {
    mongoose.connection.db.dropDatabase()
        .then(() => {
            console.info('DB Dropped');
            return Drone.create(DRONES);
        })
        .then((createdDron) => {
            console.log('✈️ fue creado');
            createdDron.forEach(createdDron => console.log(`${createdDron} was created`));
            return mongoose.connection.close();
        })
        .then(() => {
            console.log('Connection closed');
            process.exit(1);
        })
        .catch((err => {
            console.error(err);
            process.exit(0);
        }))
});