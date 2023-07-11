// Iteration #1
require ('../db');

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
const drones = require('../data/drones.json');

mongoose.connection.once('open', () => {
    mongoose.connection.db.dropDatabase()
        .then(() => {
            console.log('DB cleared');
            return Drone.create(drones);
        }
        )
        .then((dronesDB) => {
            dronesDB.forEach((drone) => {
                console.log(`${drone.name} created`);
            });
        })
        .catch((err) => console.log(`An error occurred while creating drones from the DB: ${err}`))
        .finally(() => {
            mongoose.disconnect();
        });

});



