// Iteration #1
const mongoose = require("mongoose");
const Drone = require('../models/Drone.model')

const DB_NAME = "express-drones-dev";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const droneArray = [
    {
        name: "MQ-9 Reaper",
        propellers: 21,
        maxSpeed: 10,
    },
    {
        name: "AAI RQ-71/B",
        propellers: 36,
        maxSpeed: 15,
    },
    {
        name: "RQ-170 Sentinel",
        propellers: 40,
        maxSpeed: 20,
    },
];

const [ droneOne, droneTwo, droneThree] = droneArray;

Drone.create(droneArray)
    .then((drones) => {
        console.log(`Created ${drones.length} drones`);
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log(`An error occurred while creating the drones: ${err}`);
    })