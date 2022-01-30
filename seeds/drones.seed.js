// Iteration #1
const mongoose = require("mongoose");
const drone = require('../models/Drone.model');
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

const drones =[
    {
        name: 'coco',
        propellers: 2,
        maxSpeed: 18
    },
    {
        name: 'gregs',
        propellers: 4,
        maxSpeed: 18 
    }
];

drone.create(drones)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);
    // Once created, close the DB connection
    mongoose.disconnect();
  })
  .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));