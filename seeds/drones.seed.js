const { default: mongoose } = require("mongoose");

// Iteration #1
const Drones = require('../models/Drone.model')

const drones = [

    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const connectionString = 'mongodb://127.0.0.1:27017/drones-database'

mongoose

    .connect(connectionString)
    .then(x => {
        console.log(`Conectado a Mongo database: "${x.connections[0].name}"`)
        return Drones.create(drones)
    })

    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`)
        return mongoose.connection.close
    })

    .then(() => {

        console.log('DB connection close')

    })

    .catch(err => {
        console.log(`An error occurred while creating books from the DB: ${err}`)
    })
