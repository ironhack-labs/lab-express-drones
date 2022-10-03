// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/lab-express-drones';

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  mongoose
    .connect(MONGO_URI)
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
        console.log(`An error occurred while creating the drones from the database: ${err}`);
    });
