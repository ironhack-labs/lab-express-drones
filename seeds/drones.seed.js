// Iteration #1
// bin/seeds.js

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/lab-express-drones';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//  useFindAndModify: false,
//  useCreateIndex: true
});

// PASTE HERE THE LIST OF BOOKS PROVIDED IN THIS GIST: https://gist.github.com/ironhack-edu/2816267a015d4870f95275cb873d33b6

const drones = [
    {
      name: "The razerblade",
      propellers: 6,        
      maxSpeed: 50
     },
    {
      name: "The sneaker",
      propellers: 4,        
      maxSpeed: 10
    },
    {
      name: "The spitfire",
      propellers: 1,        
      maxSpeed: 100
    }
  ];

Drone.create(drones)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));