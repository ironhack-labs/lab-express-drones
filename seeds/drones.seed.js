// Iteration #1
const mongoose = require('mongoose')

const Drone = require('../models/Drone.model')

const MONGO_URI = "mongodb://localhost/lab-express-drones";

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });





const drones = [
    { name: "Baykar Bayraktar TB2", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bayraktar_TB2_Runway.jpg/1600px-Bayraktar_TB2_Runway.jpg", manufacturer: 'Turkey', propellers: 1, maxSpeed: 220, weaponSystems: ["L-UMTAS", "MAM", "Roketsan Cirit", "BOZOK Laser Guided Rockets"] }

]

Drone.create(drones)
    .then(drones => {
        console.log(drones)
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));