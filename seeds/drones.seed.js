const mongoose = require('mongoose')

// requerir el modelo
const Drone = require('./../models/Drone.model')

// Fuente de Datos
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
    { name: "Pegaso", propellers:4, maxSpeed:40},
    { name: "Lucifer", propellers: 4, maxSpeed: 25 },
    { name: "Popino", propellers: 4, maxSpeed: 15 }
];


// 3.- Establecemos string de conexión de MongoDB  (OJO, igual que en el .env)
const connectionString = 'mongodb://127.0.0.1:27017/lab-express-drones'


mongoose
    .connect(connectionString)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
        return Drone.create(drones)
    })

    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`)
        return mongoose.connection.close()
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });


    




