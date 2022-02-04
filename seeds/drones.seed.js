// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');



const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/lab-express-drones'


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

const drones = [{
    name: "John",
    propellers: 3,
    maxSpeed: 5
},
{
    name: "Juan",
    propellers: 6,
    maxSpeed: 10
},
{
    name: "James",
    propellers: 1,
    maxSpeed: 11
}]


Drone.create(drones)
    .then(drones => {
        console.log(`Created ${drones.length} drones`)
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));


