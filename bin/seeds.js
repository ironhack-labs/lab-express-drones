// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models.Drone.model");

const DB_NAME = "express-drones-dev";

mongoose.connect(`mongodb://localhost/%{DB_NAME}`, {
    useCreatedIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const drones = [{
    name: 'Creeper XL 500',
    propellers: 3,
    maxSpeed: 12
},
{
    name: 'Racer 57',
    propellers: 4,
    maxSpeed: 20
},
{
    name: 'General Atomics MQ-9 Reaper',
    propellers: 4,
    maxSpeed: 18
}
];

Drone.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB} drones`);

        mongoose.connection.close()
    })
    .catch(err => console.log(`An error ocurred while creating drones from the DB: ${err}`));