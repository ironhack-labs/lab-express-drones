// Iteration #1
let DroneModel = require('../models/Drone.model');
const mongoose = require('mongoose');
require('../configs/db.config');

let drones = [{
    name: "dji mavic",
    propellers: 4,
    maxSpeed: 20
},
{
    name: "dji mavic air",
    propellers: 4,
    maxSpeed: 25  
},
{    
    name: "dji mavic pro",
     propellers: 4,
     maxSpeed: 30
}];

let dataBase = DroneModel.create(drones)
.then((response) => {
    console.log('working', response)
})
.catch(() => {
    console.log('somdething went wrong')
})

Promise.all([dataBase]) 
.then((response) => {
  mongoose.connection.close()
  .then((response) => {
    console.log('closing the database')
  })
  .catch(() => {
    console.log('something went wrong')
  })
})
.catch(() => {
  console.log('Something went wrong')
})
