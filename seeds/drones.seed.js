// Iteration #1

require("../db");

// create ToDo items to add to our collection
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

// Insert ToDo items to the DB
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

// .create() method to insert multiple elements to the DB (Seeding)
Drone.create(drones)
    .then((res) => {
        console.log(drones.length);
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log("ooooops!");
    });