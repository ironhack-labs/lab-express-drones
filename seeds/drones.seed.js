// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const mongoose = require('mongoose');
const Drone = require("../models/Drone.model");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/lab-express-drones";


console.log("DEBUG", MONGO_URI)

mongoose.connect(MONGO_URI)
    .then(data => {
        console.log('Connected to the DB With name : ', data.connections[0].name)
    })
    .then(() => Drone.collection.drop())
    .then(() => Drone.create(drones))
    .then((data) => {
        console.log("Drones Created :", data);
        mongoose.connection.close();
    })
    .catch(err => console.log('Error connecting to the data base: ', err));
