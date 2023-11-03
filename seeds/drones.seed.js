// Iteration #1
const mongoose = require("mongoose")
const Drone = require("./../models/Drone.model")
const connectionString = 'mongodb://127.0.0.1:27017/lab-express-drones'

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose
    .connect(connectionString)
    .then(x => {
        console.log("Se ha conectado a la base de datos", x.connections[0].name)
        return Drone.create(drones)
    })
    .then(dronesCreated => {
        console.log("Se han añadido", dronesCreated.length, "registros")
        return mongoose.connection.close()
    })
    .then(console.log("Conección cerrada"))
    .catch(err => console.log("Se ha producido un error", err))

