// Iteration #1

// Array with first 3 objects
const drones = [
    {
        name: 'BeeDrone',
        propellers: 10,
        maxSpeed: 50
    },
    {
        name: 'Bouncy Trackers',
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: 'Bright Skies',
        propellers: 3,
        maxSpeed: 15
    }
]


// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const Drone = require('../models/Drone.model');

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


async function droneSeed () {
    try {
        const x = await mongoose.connect(MONGO_URI);
        console.log(`Connected to: ${x.connections[0].name}`);

        const createdDrones = await Drone.create(drones);
        
        console.log(`Successfuly created ${createdDrones.length} drones`);

        x.disconnect();

    } catch (error) {
        console.log(error);
    }
}

droneSeed();