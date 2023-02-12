const mongoose = require('mongoose')
const Drones = require('./../models/Drone.model')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];
const connectionString = 'mongodb://127.0.0.1:27017/lab-express-drones'




mongoose
    .set('strictQuery', false)
    .connect(connectionString)
    .then(() => {
        return Drones.collection.drop()                               // vaciar colección
    })
    .then(() => {
        return Drones.insertMany(drones)                               // transacción
    })
    .finally(() => {
        mongoose.connection.close()                                 // cierre
    })
    .catch(err => console.log('Error en conexión'))

