// Iteration #1
const { process_params } = require('express/lib/router')
const mongoose = require('mongoose')

const Drone = require('../models/Drone.model')

const MONGO_URI = 'mongodb://localhost/drones22';

mongoose

    .connect(MONGO_URI)
    .then((Drone) => {
        console.log('drones connected to Mongo database name:"${drone.connections[0].name} ')
    })

    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


Drone

    .create(drones)
    .then(dronesFromDB => {

        console.log(`Created ${dronesFromDB.length} drones`)

        mongoose.connection.close()
    })





