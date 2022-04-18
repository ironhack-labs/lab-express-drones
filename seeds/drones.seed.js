// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')
const MONGO_URI = 'mongodb://localhost/dronesDB'

mongoose
    .connect(MONGO_URI)
    .then((x) => console.log('estoy conectado?'))
    .catch((err) => console.log('error al conectar la base de datos' + err))


const drones = [
    {
        name: 'General Atomics MQ-9 Reaper',
        propellers: 4,
        maxSpeed: 15
    },
    {
        name: 'Droncito velociraptor 85',
        propellers: 2,
        maxSpeed: 8
    },
    {
        name: 'Attack titan 52',
        propellers: 4,
        maxSpeed: 17
    }
]

Drone
    .create(drones)
    .then(dronToDB => {
        console.log(`Estoy creando una nueva DB con  ${dronToDB.length}`);
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
