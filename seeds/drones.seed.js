// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";
mongoose
  .connect(MONGO_URI)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


  const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


  Drone.create(drones)
  .then(createdDrones => console.log('The user is saved and its value is: ', createdDrones))
  .catch(error => console.log('An error happened while saving a new user:', error));
  mongoose.connection.close();