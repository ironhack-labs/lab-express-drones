const mongoose = require('mongoose')
const Drones = require('./../models/Drone.model')


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const connectionString = 'mongodb://localhost:27017/drones-app'

mongoose
    .set('strictQuery', true)
    .connect(connectionString)
    .then(() => {
        return Drones.collection.drop()
    })
    .then(() => {
        return Drones.insertMany(drones)
    })
    .finally(() => {
        mongoose.connection.close()
    })
    .catch(err => console.log('error'))