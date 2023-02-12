// Iteration #1
const mongoose = require('mongoose')
const drone = require('../models/Drone.model')
require('dotenv/config')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

// const conectionString = process.env.MONGODB_URI       -> esta mierda no funciona
const conectionString = 'mongodb://127.0.0.1:27017/lab-express-drones'

mongoose
    .connect(conectionString)
    .then(() => drone.collection.drop())
    .then(() => drone.insertMany(drones))
    .then(drones => console.log('Se han creado', drones.length, 'drones'))
    .finally(() => mongoose.disconnect(console.log('conexion closed')))
    .catch(err => console.log('Error en conexión', err))