
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
// const Author = require('../models/Author.model.js');

const dbtitle = 'lab-express-drones';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Drone.collection.drop();
// **** Revisar
// Author.collection.drop();

const drones = [
    {
        name: "Creeper XL 500",
        propellers: 4,
        maxSpeed: 20,

    },
    {
        name: "Racer 57",
        propellers: 2,
        maxSpeed: 100,

    },
    {
        name: "Courier 3000i",
        propellers: 6,
        maxSpeed: 18,

    },
]

Drone
    .create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));