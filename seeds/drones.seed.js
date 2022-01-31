// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model.js');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


const drones = [
    {
        name: 'Rescue Drone',
        propellers: 6,
        maxSpeed: 50,
    },
    {
        name: 'Police Drone',
        propellers: 8,
        maxSpeed: 80,
    },
    {
        name: 'Army Drone',
        propellers: 10,
        maxSpeed: 100,
    },
];

Drone.create(drones)
  .then(dronesFromDB => {
    //console.log(`Drones from DB ${dronesFromDB} drones`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));


 
