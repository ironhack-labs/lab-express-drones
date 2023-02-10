const mongoose = require('mongoose')
const Drone = require('./../models/Drone.model')

const drones = [
    {
        name: 'Drone 3000',
        propellers: 30,
        maxSpeed: 120,
    },
    {
        name: 'Droner Kebab',
        propellers: 2,
        maxSpeed: 80,
    },
    {
        name: 'Papagayo',
        propellers: 4,
        maxSpeed: 88,
    }
]

const connectionString = 'mongodb://127.0.0.1:27017/drones'

mongoose
    .set('strictQuery', false)
    .connect(connectionString)
    // vaciar colección
    .then(() => {
        return Drone.collection.drop()
    })
    // insertar colección
    .then(() => {
        return Drone.insertMany(drones)
    })
    .then(drones => {
        console.log('Se han creado', drones.length, 'drones')
    })
    // cierre
    .finally(() => {
        mongoose.connection.close()
    })
    .catch(err => console.log('Error en conexión'))