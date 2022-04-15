
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')
    
const MONGO_URI = "mongodb://localhost/drones-app"
    
    mongoose
    .connect(MONGO_URI)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connecting to mongo: ", err))
    
    
    
const drones = [
    {
        name: "DJI Mavic",
        propellers: 3,
        maxSpeed: 15,
    },

    {
        name: "Autel Robotics Evo Lite+",
        propellers: 4,
        maxSpeed: 16,
    },

    {
        name: "DJI Mavic Aire 2S",
        propellers: 5,
        maxSpeed: 17,
    },
];

Drone
.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));




