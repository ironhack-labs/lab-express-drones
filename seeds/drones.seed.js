// Iteration #1

// 1.- requerir modelo
const mongoose = require('mongoose')

// 2.- Establecemos fuente de datos
const Drone = require('./../models/Drone.model')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
    { name: "Ferinator 5000", propellers: 5, maxSpeed: 30 },
    { name: "BooksTrap 2027", propellers: 7, maxSpeed: 50 }
];

const connectionString = 'mongodb://127.0.0.1:27017/dronesDataBase'

mongoose
    .connect(connectionString)
    .then(x => {
        console.log(`Connected to Mongo database: "${x.connections[0].name}"`)
        return Drone.create(drones)
    })
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`)
        return mongoose.connection.close()
    })
    .then(() => {
        console.log('DB connection closed!')
    })
    .catch(err => {
        console.log(`An error occurred while creating books from the DB: ${err}`)
    })