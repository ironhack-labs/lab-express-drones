// Iteration #1
require('dotenv/config');

const mongoose = require('mongoose');
const DroneModel = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";


const drones = [
    {
        name: "dron1",
        propellers: 4,
        maxSpeed: 16
    },
    {
        name: "dron2",
        propellers: 2,
        maxSpeed: 12
    },
    {
        name: "dron3",
        propellers: 6,
        maxSpeed: 25
    },
]

mongoose
    .connect(MONGO_URI)
    .then((connectMongoose) => {
        console.log('Connect DB: ', connectMongoose.connections[0].name);
        return DroneModel.insertMany(drones);
    })
    .finally(() => {
        mongoose.disconnect();
    })
