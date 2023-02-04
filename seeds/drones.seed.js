require('dotenv').config()  // para que funcione hay que ejecutar el archivo desde su parent root: node .\seeds\drones.seed.js
// Iteration #1
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];
const Drone = require('../models/drone.model')
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";
// console.log('MONGODB_URI > ', MONGODB_URI)
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    Drone.create(drones)
      .then((resp) => {
        // OPCION A
        // mongoose.connection.close()
        // OPCION B
        mongoose.disconnect()
      })
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });