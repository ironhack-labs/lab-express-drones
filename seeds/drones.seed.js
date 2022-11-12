const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')

mongoose.connect("mongodb://localhost/lab-express-drones")


const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


Drone.collection.drop().then(() => {

  Drone
    .create(drones)
    .then(dronesFromDB => {
      console.log(dronesFromDB)
      console.log(`Created ${dronesFromDB.length} drones`);
      mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));
})

