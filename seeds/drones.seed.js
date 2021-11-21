// Iteration #1

//Use Mongoose schema and make sure that the Drone model has all the properties listed above 
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
 
//Establish a connection to the database. You can use the same code in db/index.js
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/lab-express-drones';
 
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

//Create an array of 3 objects, each with name, propellers and maxSpeed as our initial drones

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

//call the Drone model's .create() method with the array as an argument.
//the .create() method successfully creates the drones collection, output (using console.log()) how many drones have been created. 
//In case, the seeding of the database fails, catch the error and output it.

Drone.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));
  