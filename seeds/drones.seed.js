const mongoose = require('mongoose')

const Drone = require('./../models/Drone.model')

const drones = [
    {
        name: "Vorrocoptero 3000",
        propellers: 3,
        maxSpeed: 15
    },
    {
        name: "jorginator",
        propellers: 1,
        maxSpeed: 2
    },
    {
        name: 'turbulencio',
        propellers: 8,
        maxSpeed: 40
    }]
const connectionString = "mongodb://127.0.0.1:27017/lab-express-drones"

mongoose
    .connect(connectionString)
    .then(x => {
        console.log(`Connected to Mongo database: "${x.connections[0].name}"`)
        return Drone.create(drones)
    })
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} books`)
        return mongoose.connection.close()
    })
    .then(() => {
        console.log('DB connection closed!')
    })
