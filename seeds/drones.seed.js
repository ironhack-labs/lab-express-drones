const mongoose = require("mongoose")

const Drone = require('./../models/Drone.model')

const drones = [
    {
        name: "Creeper XL 500",
        propellers: 3,
        maxSpeed: 12
    },
    {
        name: "Racer 57",
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: "Courier 3000i",
        propellers: 6,
        maxSpeed: 18
    }
]

const connectionString = "mongodb://localhost/drones-app"


mongoose
    .set('strictQuery', false)
    .connect(connectionString)
    .then(() => { return Drone.collection.drop() })
    .then(() => { return Drone.insertMany(drones) })                                                  //NOTA MENTAL: aqui podria usar .create() al haber tan pocos objetos en el array
    .then(drones => { console.log('There are', drones.length, 'new drones in the DDBB') })
    .finally(() => { mongoose.connection.close() })
    .catch(err => console.log('Conection error'))
