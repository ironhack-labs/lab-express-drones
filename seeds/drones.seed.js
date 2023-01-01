// Iteration #1
const mongoose = require('mongoose');

const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/lab-express-drones' || "mongodb://localhost:27017/lab-express-drones";  //can someone explain to me why the first connection works through the .env, post 3003, but then mistakes in the ors wreck the entire code... shouldnt they be irrelevant if the first statement works?????

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
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



