// Iteration #1
const mongoose = require('mongoose')

const Drone = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });

const drones = [{
    name: 'DJI Mavic 1',
    propellers: 1,
    maxSpeed: 10

},
{
    name: 'DJI Mavic 2',
    propellers: 2,
    maxSpeed: 20
},
{
    name: 'DJI Mavic 3',
    propellers: 3,
    maxSpeed: 30
    }]

Drone
    .create(drones)
    .then(dronesDB => {
        console.log(`created ${dronesDB.length} drones`)
        mongoose.connection.close()
    })
    .catch(err=> console.log(`hubo un error al crear la BBDD ${err}`))