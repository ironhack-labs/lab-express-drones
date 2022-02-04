// Iteration #1

// requerir mongoose y el modelo Drone
const Drone = require('../models/Drone.model')
const mongoose = require('mongoose')


// conectar con BBDD
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        )
    })
    .catch((err) => console.error("Error connecting to mongo: ", err))


// array de drones
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

// crear los drones en la base de datos

Drone
    .create(drones)
    .then(createdDrones => {
        console.log(`Created ${createdDrones.length} drones`)
        // cerrar la conexión con la base de datos
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`))


