// Iteration #1
const mongoose = require('mongoose')
require("../configs/db.config");

const DroneModel = require("../models/DroneModel.js");

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
]
console.log(drones.length); 

DroneModel.create(drones)
  .then((droneDocument) => {
    console.log(droneDocument);
  })
  .catch((error) => {
    console.log(error);
  }); 
  
  mongoose.disconnect(drones)
  .then(()=>{
      console.log("mongoDB is over")
  })
  .catch(()=>{
      console.log("error")
  })



 
  
