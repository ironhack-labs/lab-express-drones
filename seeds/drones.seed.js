// Iteration #1
const mongoose = require("mongoose");
const DroneModel = require("../models/Drone.model");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";


const drones = [
    { name: "Creeper XL 500", propellers: 3, speed: 12 },
    { name: "Racer 57", propellers: 4, speed: 20 },
    { name: "Courier 3000i", propellers: 6, speed: 18 }
];

mongoose
    .connect(MONGO_URI)
    .then(() => {
        return DroneModel.deleteMany();
    })
    .then(value => {
        return DroneModel.create(drones)
    })
    .then((drones) => {
        console.log(drones)
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    })
    .finally(() => {
        mongoose.connection.close();
    });












