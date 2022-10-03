const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


  mongoose
  .connect('mongodb://localhost/lab-express-drones')
  .then(x => {
      console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

      return Drone.create(drones);
  })
  .then(dronesFromDB => {
      console.log(`Created ${dronesFromDB.length} books`);

      return mongoose.connection.close();
  })
  .then(() => {
      console.log('DB connection closed!');
  })
  .catch(err => {
      console.log(`An error occurred while creating drons from the DB: ${err}`);
  });
