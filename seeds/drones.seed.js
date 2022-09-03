// Iteration #1
require('dotenv/config');
const mongoose = require('mongoose');
const DroneModel = require('../models/Drone.model');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/drones'

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose
    .connect(MONGO_URI)
    .then((connectMongoose) => {
        console.log('Connect DB: ', connectMongoose.connections[0].name);
        return DroneModel.create(drones)
    })
    .then((drones) => {
        console.log(drones.length)
    })
    .catch((err) => {
        console.error('Error:', err);

    })
    .finally(() => {
        mongoose.disconnect();
    })