// Iteration #1

// initialize Mongoose
const mongoose = require('mongoose');
// connect to Drone model
const Drone = require('../models/Drone.model');

// connect to MongoDB
const MONGO_URI =
process.env.MONGODB_URI || 'mongodb://localhost:27017/express-drones';

// create an array of 3 initial objects
const drones = [
    {
        name: 'Anna',
        propellers: 4,
        maxSpeed: 18
    },
    {
        name: 'Bob',
        propellers: 6,
        maxSpeed: 18
    },
    {
        name: 'Charly',
        propellers: 4,
        maxSpeed: 20
    },
];

// establish a connection to the database; use the same code in db/index.js
mongoose
.connect(MONGODB_URI)
.then(() => {
    // then call the Drone model's .create() method with the array as an argument
    return Drone.create(drones);
})
.then((createdDrones) => {
    // then console.log how many drones have been created
    console.log(`Added ${createdDrones.length} drones`);
    // close DB connection
    mongoose.connection.close();
})
.catch(err => {
    // ... or catch the error and output it
    console.log(`Error detected: ${err}`);
});



