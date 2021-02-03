// Iteration #1
require("dotenv").config();
require("../config/db.config");
const Drone = require("../models/Drone.model")
const mongoose = require('mongoose');

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
        name: 'Courier 3000i',
        propellers: 6,
        maxSpeed: 18
    }
];

Drone.create(drones)
    .then((dronesDB) => {
        console.log(`$ {dronesDb}have been added`)
    })