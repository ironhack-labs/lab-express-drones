// Iteration #1
const mongoose = require("mongoose");
const Drone = require('../models/Drone.model');


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const MONGO_URI =  "mongodb://127.0.0.1/lab-express-drones";

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .then((response) => {
        console.log(response);
        return Drone.create(drones);
    })
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });