// Iteration #1

const mongoose = require('mongoose');

const DroneModel = require('../Models/Drone.model');

const MONGO_URI = "mongodb://localhost/lab-express-drones";




const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


mongoose
    .connect(MONGO_URI)
    .then((connectMongoose) => {
        console.log('Connect DB: ', connectMongoose.connections[0].name);
        return DroneModel.deleteMany();
    })
    .then(() => {
        return DroneModel.insertMany(drones);
    })
    .catch((err) => {
        console.error('Error:', err);
    })
    .finally(() => {
        console.log('Me desconecto')
        mongoose.disconnect()
    })



