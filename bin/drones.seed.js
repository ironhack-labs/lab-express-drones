// Iteration #1
require("../config/db.config") //connect with the db
const Drone = require('../models/drone.model') //require the model


const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12, image: "https://dronerush.com/wp-content/uploads/2017/09/Atlas-Pro-InterDrone-DR.jpg" },
  { name: "Racer 57", propellers: 4, maxSpeed: 20, image: "https://cdn.shopify.com/s/files/1/1006/7450/products/DJI-Phantom-4-STEALTH-2_ad6fecb3-9ea5-40c7-9e51-572cae7e2122_480x480.jpg?v=1613230420" },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18, image: "https://i.pinimg.com/originals/a7/af/9d/a7af9de4fd63b642bf0e4a962055b3cd.jpg" }
];

Drone.create(drones)
  .then((drones) => console.log(drones))
  .catch((err) => console.error(`An error has occurred ${err}`))
  .finally(() => mongoose.connection.close())


