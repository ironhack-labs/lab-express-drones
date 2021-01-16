// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
require("../configs/db.config.js")


const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12, image: 'images/3-propeller-drone.jpeg' },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20, image: 'images/4-propeller-drone.jpg'},
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18, image: 'images/6-propeller-drone.jpg' }
];







Drone.create(drones)
  .then(dronesFromDB =>{
    console.log(dronesFromDB)
    console.log(dronesFromDB.length)
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));