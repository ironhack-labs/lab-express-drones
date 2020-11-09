// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const DB_NAME = 'drone-project';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const drones = [
    {
      name: 'drone1',
      propeller: 4,
      maxSpeed :50
    },
    {
        name: 'drone2',
        propeller: 3,
        maxSpeed :30
    },
    {
        name: 'drone3',
        propeller: 5,
        maxSpeed :90
    }
];

Drone.create(drones)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} books`);
 
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));