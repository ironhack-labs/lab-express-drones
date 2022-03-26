// Iteration #1
const mongoose = require("mongoose");
const Drone = require('../models/Drone.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  Drone.create(drones)
    .then((dronesFromDB) => {
        console.log('This is the total number of drones in the DB: ', dronesFromDB.length)
        mongoose.connection.close()
    })
    .catch((err) => console.log(`Error while seeding the database ${err}`))