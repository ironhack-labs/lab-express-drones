// Iteration #1
require('../db')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];
  

const mongoose = require('mongoose');

const ListOfDrones = require('../models/Drone.model');

ListOfDrones.create(drones)
.then((result)=> {
    console.log(`Great, you logged ${drones.length} drones!`)
    mongoose.connection.close();
}).catch((error)=> {
    console.log("Your connection has failed!")
})