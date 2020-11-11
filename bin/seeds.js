// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const DB_NAME = "express-drones-dev";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
  
const drones = [
    {
    name: 'Dji Mavic 2 Zoom',
    propellers: 4,
    maxSpeed: 20,
    },
    {
    name: 'Dji Mavic 2 Pro',
    propellers: 4,
    maxSpeed: 20,
    },
    {
        name: 'Dji Inspire 2',
        propellers: 4,
        maxSpeed: 26,
    },
]; 

Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(dronesFromDB);
    console.log(`Created ${dronesFromDB.length} drones.`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating drones to the DB: ${err}`)
  );
