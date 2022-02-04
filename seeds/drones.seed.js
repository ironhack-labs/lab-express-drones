// Iteration #1
const mongoose = require("mongoose")
const Drone = require("../models/Drone.model")

const   MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones"

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
    { name: "Flying Pig", propellers: 3, maxSpeed: 12 },
    { name: "Destru the killer", propellers: 6, maxSpeed: 15},
    { name: "Slow but not low", propellers: 4, maxSpeed: 10}
]

Drone.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB} `);
        mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));