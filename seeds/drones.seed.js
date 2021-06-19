// Iteration #1

const mongoose = require("mongoose");
const Drone = require('../models/Drone.model');
const drones = [{
        name: "Creeper XL 500",
        propellers: 3,
        maxSpeed: 12
    },
    {
        name: "Racer 57",
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: "Courier 3000i",
        propellers: 6,
        maxSpeed: 18
    }
];

require('../db/index');
mongoose.connection.once('connected', () => {
    mongoose.connection.db.dropDatabase()
    .then(() => {
        console.log('Database cleared');
        return Drone.insertMany(drones)
    }).catch(e => console.error(e))
    .finally(() => {
        mongoose.connection.close()
        .then(() => console.log('Finish drone.seeds.js'))
        .catch(e => console.error(e))
        .finally(() => {
            process.exit(0)
        })
    })
})