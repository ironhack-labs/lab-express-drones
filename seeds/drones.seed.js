const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = 'mongodb://localhost/Drones'           // <- OJO, el mismo nombre que vayas a poner en el .env

mongoose
    .connect(MONGO_URI)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connecting to mongo: ", err))

// To insert in "seeds/movies.seed.js"

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

Drone
    .create(drones)
    .then(dronFromDB => {
        console.log(`Created ${dronFromDB.length} cinema`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));