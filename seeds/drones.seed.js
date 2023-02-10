const mongoose = require('mongoose')

const Dron = require('./../models/Drone.model')


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]


const connectionString = 'mongodb://localhost/lab-express-drones'


mongoose
    .set('strictQuery', false)
    .connect(connectionString)
    .then(() => {
        return Dron.collection.drop()
    })

    .then(() => {
        return Dron.insertMany(drones)
    })
    .catch(err => console.log('Error en conexion', err))
    .finally(() => {
        mongoose.connection.close()
    })