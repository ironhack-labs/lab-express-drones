const mongoose = require("mongoose");
const drone = require("../models/Drone.model");

const DB_NAME = "express-drones-dev";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

drone
  .create(drones)
  .then((fronesFromDB) => {
    console.log("Drones are created");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
