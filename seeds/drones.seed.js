// Iteration #1 ejecutar con Node: node seeds/drone.seed.js
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')
const MONGO_URI = 'mongodb://localhost/drone-app'

mongoose.connect(MONGO_URI)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connecting to mongo: ", err))


const drones = [
    {
        name: 'Terminator',
        propellers: 8,
        maxSpeed: 18
    },
    {
        name: 'Birdy',
        propellers: 4,
        maxSpeed: 10
    },
    {
        name: 'Eagle',
        propellers: 6,
        maxSpeed: 16
    }

]

Drone
    .create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} movies`)
        mongoose.connection.close();
    })

    .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`))