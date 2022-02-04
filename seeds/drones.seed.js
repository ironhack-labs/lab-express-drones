// Iteration #1
const mongoose = require("mongoose");
const Drone = require('../models/Drone.model.js')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });


const drones = [
    {
        name: 'Nautilus 314',
        propellers: 4,
        maxSpeed: 20

    },
    {
        name: 'Star trek 215',
        propellers: 7,
        maxSpeed: 29
    },
    {
        name: 'Starwars 10',
        propellers: 5,
        maxSpeed: 25
    }
]

Drone.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`)
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));
