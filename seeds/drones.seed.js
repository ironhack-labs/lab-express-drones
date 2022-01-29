require("dotenv").config();
require("../db/index");
const Drone = require("../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

Drone.remove().then(() =>
  Drone.create(drones)
    .then((drones) =>
      console.log(`${drones.length} drones sucessfully created`)
    )
    .catch((err) => console.log(`Error while creating a new drone ${err}`))
    .finally(() => {
      process.exit();
    })
);
