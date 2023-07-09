// Iteration #1

const mongoose = require('mongoose');

require('../db/index');

const drones = require('../drones.json');

const Drone = require('../models/Drone.model');

mongoose.connection.once("open", () => {
    mongoose.connection.dropDatabase()
        .then(() => {
            console.log("DB Borrada");
            return Drone.create(drones)
        })
        .then(drones => {
            drones.forEach(drone => {
                console.log(`${drone.name} ha sido creada`)
            })
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            mongoose.disconnect();
        })
})
