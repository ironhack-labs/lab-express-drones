// Iteration #1
const Drone = require('../models/drone.model')

const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/lab-express-drones'

mongoose
  .connect(MONGO_URI)
  .then(() => console.info(`Succesfully connected to the database ${MONGO_URI}`))
  .catch((err) => console.error(`Error connecting to mongo ${err}`));

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

Drone.create(drones)
  .then((drones) => console.log(drones))
  .catch((err) => console.error(`An error has occurred ${err}`))
  .finally(() => mongoose.connection.close())
