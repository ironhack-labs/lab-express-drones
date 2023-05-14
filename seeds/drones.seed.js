// Iteration #1
// to seed your database, use the 'node' command followed by the filename 

const mongoose = require('mongoose')
const Drone = require('./../models/Drone.model')

const MONGO_URI = 'mongodb://127.0.0.1:27017/lab-express-drones'

const drones = [
    {
        name: "General Atomics MQ-9 Reaper",
        propellers: 4,
        maxSpeed: 20,

    },
    {
        name: "DJI AIR 2S Drone",
        propellers: 3,
        maxSpeed: 25,

    },
    {
        name: "Autel Robotics Evo Nano+",
        propellers: 6,
        maxSpeed: 18,

    },
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