// Iteration #1
// require("../config/db.config")

const Drone = require('../models/drone.model')

// Drone.deleteMany().then(() => {
//   for (let i=0; i < 100; i++) {
//     Drone.create({

//     })
//   }
// })

const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/lab-express-drones'

mongoose
  .connect(MONGO_URI)
  .then(() => console.info(`Successfully connected to the database ${MONGO_URI}`))
  .catch((err) => console.error(`Error connecting to mongo ${err}`));

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12, image: "https://dronerush.com/wp-content/uploads/2017/09/Atlas-Pro-InterDrone-DR.jpg" },
  { name: "Racer 57", propellers: 4, maxSpeed: 20, image: "https://cdn.shopify.com/s/files/1/1006/7450/products/DJI-Phantom-4-STEALTH-2_ad6fecb3-9ea5-40c7-9e51-572cae7e2122_480x480.jpg?v=1613230420" },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18, image: "https://i.pinimg.com/originals/a7/af/9d/a7af9de4fd63b642bf0e4a962055b3cd.jpg" }
];

Drone.create(drones)
  .then((drones) => console.log(drones))
  .catch((err) => console.error(`An error has occurred ${err}`))
  .finally(() => mongoose.connection.close())
