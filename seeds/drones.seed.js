const mongoose = require('mongoose')
const Drone = require('./../models/Drone.model')

const drones = [
    {
        name: "Great Dumb Drone",
        propellers: 3,
        maxSpeed: 18
    },
    {
        name: "Dronator 1000",
        propellers: 1,
        maxSpeed: 3
    },
    {
        name: "Drone GPT",
        propellers: 3113,
        maxSpeed: 299792458
    }
]

// Establish a connection to the database

const connectionString = 'mongodb://localhost:27017/lab-express-drones'


mongoose
    .set('strictQuery', false)
    .connect(connectionString)
    .then(() => {
        return Drone.collection.drop()                              // vaciar colección
    })
    .then(() => {
        return Drone.create(drones)                                 // transacción
    })
    .then(drones => {
        console.log('Se han creado', drones.length, 'drones')
    })
    .finally(() => {
        mongoose.connection.close()                                 // cierre
    })
    .catch(err => console.log('Error en conexión'))