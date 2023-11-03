// Iteration #1
const mongoose = require('mongoose')

const Drone = require('./../models/Drone.model')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ]

const connectionString = "mongodb://127.0.0.1:27017/lab-express-drones"

mongoose
.connect(connectionString)
.then(x =>{
    console.log(`estoy conectado a la base de datos y voy a crear drones`)
    return Drone.create(drones)
})
.then(dronesCreated =>{
    console.log(`he creado ${dronesCreated.length} drones yuhu`)
    return mongoose.connection.close()
})
.catch(err =>{
    console.log(`fatal gracias ; ${err}`)
})