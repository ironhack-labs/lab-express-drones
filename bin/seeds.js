// Iteration #1
require("../configs/db.config");

const DroneModel = require("../models/Drone.models");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

//Add the script that will run to seed the DB

DroneModel.create(drones)
  .then((droneInfo) => {
    console.log(droneInfo.length);
    mongoose.connection.close("mongodb://localhost/express-drones-dev");
  })
  .catch((err) => {
    console.log(err);
  });
