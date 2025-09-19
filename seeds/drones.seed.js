// Iteration #1
const mongoose = require('mongoose')

const Drone = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const drones = [
  {
    name: "General Atomics MQ-9 Reaper",
    propellers: 4,
    maxSpeed: 18
  },
  {
    name: "DJI Phantom 4 Pro",
    propellers: 4,
    maxSpeed: 20
  },
  {
    name: "Parrot Anafi",
    propellers: 4,
    maxSpeed: 15
  }
];

Drone.create(drones)

    .then((dronesFromDB) => {
        console.log('coleccion de drones creada', dronesFromDB.length);
        mongoose.connection.close()
    })
    .catch(error => console.log('algo fallo', error))

    
