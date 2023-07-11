// Iteration #1
const mongoose = require('mongoose');

const drones = require('../drones.json');

require('../db/index');

const Drone = require('../models/Drone.model');

mongoose.connection.once('open', () => {
    mongoose.connection.dropCollection('drones')
    .then(() => {
        console.log('Collection cleared!')
        return Drone.create(drones)
    })
    .then(() => {
        drones.forEach((drone) => {
            console.log(`The drone ${drone.name} has been created`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        mongoose.disconnect();
    })
})