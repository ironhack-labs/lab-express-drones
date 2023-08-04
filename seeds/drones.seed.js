// // Iteration #1
const mongoose = require('mongoose')

// // 1.- requerir modelo
const Drones = require('./../models/Drone.model')

// // 2.- Establecer fuente de datos
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
    { name: "Popino hidrospeed", propellers: 2, maxSpeed: 22 },
    { name: "Cromi darkphantom", propellers: 4, maxSpeed: 59 },
    { name: "Kamehame ha", propellers: 2, maxSpeed: 31 }
];




const connectionString = 'mongodb://127.0.0.1:27017/lab-express-drones'



mongoose
    .connect(connectionString)
    .then(x => {
        console.log('Connected to Mongo database: "${x.connections[0].title}"')
        return Drones.create(drones)
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

// // 5.- Ejecuta este archivo con node - node seeds/drones.seed.js