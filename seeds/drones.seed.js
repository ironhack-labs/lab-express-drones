// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });



const drones = [
    { name: "Creeper XL 500", propellers: 3, speed: 12 },
    { name: "Racer 57", propellers: 4, speed: 20 },
    { name: "Courier 3000i", propellers: 6, speed: 18 }
];

Drone.create(drones)
    .then(createdDrone => {
        console.log(`created: ${createdDrone.length} drones`)
        mongoose.connection.close()
    })
    .catch((err) => console.log(err));