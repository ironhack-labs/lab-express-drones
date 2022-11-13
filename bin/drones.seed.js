const mongoose = require('mongoose')
const DroneModel = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lab-express-drones'

mongoose
    .connect(MONGO_URI)
    .then(() => {
        const drones = [
            { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
            { name: "Racer 57", propellers: 4, maxSpeed: 20 },
            { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
        ]
        return DroneModel.create(drones)
    })
    .then((drones) => {
        console.log(`Drones created are: ${drones.length}`)
    })
    .catch((err) => console.error(err))
    .finally(() => {
        mongoose.disconnect()
    })