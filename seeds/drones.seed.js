const mongoose = require('mongoose')
const Drone = require('./../models/Drone.model')
// Iteration #1


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

const MONGO_URI = 'mongodb://127.0.0.1:27017/lab-express-drones'

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`Connected to mongo! Database name: "${x.connections[0].name}"`)
        return Drone.collection.drop()
    })
    .then(() => {
        return Drone.insertMany(drones)
    })
    .then(drones => console.log(drones.length))
    .catch((err) => {
        console.error("Error connecting to mongo: ", err)
    })
    .finally(() => {
        mongoose.connection.close()
    })
