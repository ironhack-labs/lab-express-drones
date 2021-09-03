// Iteration #1
require ('../db')  //reuse the the same DataBase connection from our main app

//Create Drone items to add to our collection

const drones = [
    { 
    name: "Creeper XL 500",
    propellers: 3,
    maxSpeed: 12
     },

    { 
    name: "Racer 57",
    propellers: 4,
    maxSpeed: 20
     },

    { 
    name: "Courier 3000i",
    propellers: 6,
    maxSpeed: 18
     }
  ];

// Insert Drone items to the DB
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model.js')

Drone.create(drones)
.then(() =>{
    console.log("all is good");
    mongoose.connection.close()
})
.catch(() => {
console.log("something was wrong adding drones")
})

