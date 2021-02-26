// Iteration #1
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Dalek", propellers: 10, maxSpeed: 1000 },
];

require("./../configs/db.config");
const DroneModel = require("./../models/Drone.model");
const mongoose = require('mongoose');

DroneModel.create(drones)
  .then((dbsuccess) => {
    console.log(dbsuccess.length, " drones have been created");
    mongoose
      .disconnect()
      .then((ok) => console.log("mongoDB disconnected"))
      .catch((err) => console.log("error disconnecting mongoDB ", err));
  })
  .catch((dbError) => console.log(dbError));

