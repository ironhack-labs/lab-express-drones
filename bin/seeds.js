// Iteration #1

const mongoose = require("mongoose");

const drone = require("../models/Drone.model");
const DB_NAME = 'express-drones-dev';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const drones = [{
        name: 'xiaomi',
        propellers: 4,
        maxSpeed: 25,
    },
    {
        name: 'DJI',
        propellers: 6,
        maxSpeed: 35,
    },
    {
        name: 'eachine',
        propellers: 5,
        maxSpeed: 15,
    },

];

drone.create(drones)
    .then((dronesFromDB) => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();
    })
    .catch((err) =>
        console.log(`An error occurred while getting drones from the DB: ${err}`)
    );