// Un archivo de seeds debe ejecutarse independientemete: node seeds/drones.seeds.js
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

// OJO --> MISMA BASE DE DATOS PRESENTE EN EL .env
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/lab-express-drones';

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });



const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


Drone.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();

    })
    .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));
