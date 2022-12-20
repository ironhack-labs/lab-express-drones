// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones" || "mongodb://localhost/lab-express-drones" || "mongodb://localhost:27017/lab-express-drones";

const drones = [
    {name: "DJI Mini 2", propellers: 4, maxSpeed: 35.79},
    {name: "Mavic Mini", propellers: 4, maxSpeed: 29.08},
    {name: "Mavic Air 2", propellers: 4, maxSpeed: 42.50},
    {name: "Mavic 2 Pro", propellers: 4, maxSpeed: 44.73},
    {name: "Mavic 2 Zoom", propellers: 4, maxSpeed: 44.73},
    {name: "Tello", propellers: 4, maxSpeed: 17.89}
];

mongoose
  .connect(MONGO_URI)
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new drones collection
    return Drone.create(drones);
  })
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);

    // Once the drone entries are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log('DB connection closed!');
  })
  .catch(err => {
    console.log(`An error occurred while creating drones in the DB: ${err}`);
  });