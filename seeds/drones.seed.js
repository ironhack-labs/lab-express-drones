// Iteration #1

require('dotenv/config');
const mongoose = require("mongoose");
const DroneModel = require('../models/Drone.model.js');


const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  mongoose
  .connect(MONGO_URI)
  .then((seedsConnection) => {
    console.log(`Connected to Mongo! Database name: "${seedsConnection.connections[0].name}"`);
    return DroneModel.deleteMany();

  })
  .then(() => {
    return DroneModel.insertMany(drones);

  })
  .then((insertDrones) => {
    const insertedDrones = insertDrones
    console.log('Created drones:', insertedDrones.length)

  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.disconnect();
  })


