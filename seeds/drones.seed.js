const mongoose = require('mongoose')

const Drone = require('../models/Drone.model') // modelo 

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 }, // Esquema del modelo "Drone"
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "DJI Mini3 Pro", propellers: 8, maxSpeed: 35 },
    { name: "Nimbus 3000", propellers: 10, maxSpeed: 45 },
    { name: "Topepino XL", propellers: 4, maxSpeed: 40 },
    { name: "Paraguas Fast", propellers: 4, maxSpeed: 15 },
    { name: "Como el Viento Perdigón", propellers: 6, maxSpeed: 78 },
    { name: "Hasta el infinito y más allá", propellers: 8, maxSpeed: 140 }

];

const connectionString = 'mongodb://127.0.0.1:27017/lab-express-drones' // conectando a DDBB Mongoose

mongoose
    .set('strictQuery', false)
    .connect(connectionString)
    .then(x => {
        return Drone.create(drones) // creando modelo de "drones" en DDBB Mongoose
    })
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`)
        return mongoose.connection.close() // cerrando la conexión con DDBB Monggose
    })
    .then(() => {
        console.log('DB connection closed!')
    })
    .catch(err => {
        console.log('An error occured when connecting with DB')
    })