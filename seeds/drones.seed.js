// to seed your database, use the 'node' command followed by the filename 

const mongoose = require('mongoose')
const Drone = require('./../models/Drone.model')

const MONGO_URI = 'mongodb://127.0.0.1:27017/lab-drones'

const drones = [
    {
        name: "Drone#1",
        propellers: 4,
        maxSpeed: 18
    },
    {
        name: "Drone#2",
        propellers: 5,
        maxSpeed: 19
    },
    {
        name: "Drone#3",
        propellers: 6,
        maxSpeed: 20
    }
]

mongoose
    .connect(MONGO_URI)
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
        console.log(`An error occurred while creating drones from the DB: ${err}`)
    })
