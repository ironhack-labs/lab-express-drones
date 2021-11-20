// Iteration #1
const Drone = require('../models/Drone.model');
const { create } = require('hbs');
const mongoose = require("mongoose");

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


// the connexion fail when we put mongodb://localhost/lab-express-drones
// replacing localhost with 127.0.0.1 solve the problem
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-express-drones";
  
mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then((x) => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .then(() => Drone.create(drones))
    .then((drones) => {
        console.log(`Successfully created ${drones.length} drones`);
        console.log(drones);
      })
    .then(() => {
        mongoose.connection.close();
      })
    .catch((err) => {
      console.error("Error connecting to mongo: ", err);
    });
  