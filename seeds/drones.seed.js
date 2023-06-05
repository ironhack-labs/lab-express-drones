const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


  mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

  Drone.create(drones)
  .then(createdDrones => {
    console.log(`${createdDrones.length} drones created.`);
    mongoose.connection.close();
  })
  .catch(error => {
    console.log('Error connecting to the database:', error);
    mongoose.connection.close();
  });


