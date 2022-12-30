// bin/seeds.js

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [
    {
        name: 'Highwind', 
        propellers: 7,
        maxSpeed: 7
    },
    {
        name: 'Tiny Bronco',
        propellers: 2,
        maxSpeed: 7,
    },
    {
        name: 'Shinra No.26',
        propellers: 1,
        maxSpeed: 17
    }

 
];

mongoose
.connect("mongodb://127.0.0.1/express-drones")
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new documents in the books collection
    return Drone.create(drones);
  })
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);

    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log('DB connection closed!');
  })
  .catch(err => {
    console.log(`An error occurred while creating drones from the DB: ${err}`);
  });







