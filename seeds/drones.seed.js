// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

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
        name: "General Atomics MQ-9 Reaper",
        propellers: 4,
        maxSpeed: 18,
    },
    {
        name: "Creeper XL 500",
        propellers: 3,
        maxSpeed: 12,
    },
    {
        name: "Racer 57",
        propellers: 4,
        maxSpeed: 20,
    },
];
Drone.create(drones)
    .then((createdDrones) => {
        console.log(`Created ${createdDrones.length} in the DB`);
        mongoose.disconnect(() => console.log("Disconnected from the db"));
    })
    .catch((err) => console.log(err));