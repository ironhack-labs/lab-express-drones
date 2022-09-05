// Iteration #1
const mongoose = require("mongoose");
const DroneModel = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
        return DroneModel.create(drones)
    })
    .then((created) => {
        console.log(created.length, " new drones have been created")
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    })
    .finally(() => {
        mongoose.disconnect()
    })



// DroneModel.create(drones)
//     .then((newDrones) => {
//         console.log(newDrones)

//     })
//     .catch((err) => {
//         next(err)
//     })