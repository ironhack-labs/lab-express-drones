// Iteration #1

const mongoose = require('mongoose')
const Dron = require('../models/Drone.model')
const MONGO_URI = "mongodb://localhost/lab-express-drones";


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

Dron.create(drones)
    .then(dronFromDB => {
        console.log(`Created ${dronFromDB.length} droncillos`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`Something has happend during the DB creations: ${err}`));

///// To Run the seed file with node to seed your database the command in this case is: node seeds/drones.seed.js
