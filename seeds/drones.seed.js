// Iteration #1
const mongoose = require('mongoose')
const Drone = require('./../models/Drone.model.js')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const connectionString = "mongodb://127.0.0.1:27017/lab-express-drones"

mongoose
    .connect(connectionString)
    .then(x => {
        console.log(`Connected to MongoDB ${x.connections[0].name}`)
        return Drone.create(drones)
    })
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`)
        return mongoose.connection.close()
    })

    .then(() => {
        console.log('Data base is closed')
    })

    .catch(err => {
        console.log(`AN ERROR OCURRED CREATING DRONES FROM DE DB ${err}`)
    })