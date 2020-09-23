require("dotenv").config();
const Drone = require("../models/Drone");
const mongoose = require("mongoose");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Drone.create(drones).then((dbResult) => {
      console.log(dbResult);
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .catch((error) => {
    console.log(error);
  });
