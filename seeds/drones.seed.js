// Iteration #1
const mongoose = require('mongoose');

const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/drones';

const drones = [
  { name: 'drone1', propellers: 5, maxSpeed: 45 },
  { name: 'drone2', propellers: 2, maxSpeed: 10 },
  { name: 'drone3', propellers: 6, maxSpeed: 30 },
];

mongoose
  .connect(MONGO_URI)
  .then(x => {
    console.log(`Connected to Mongo database`);
 
  
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



