// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const DB_NAME = "express-drones";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const drones = [
    { 
      name: 'SuperCarlos 3000',
      propellers: 4,
      maxSpeed: 20,
    },
    { 
        name: 'Eustaqio MAX53',
        propellers: 6,
        maxSpeed: 18,
    },
    { 
        name: 'JonsitoPro',
        propellers: 8,
        maxSpeed: 22,
    },
]

Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting drones from the DB: ${err}`)
  );