// Iteration #1
const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },

  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },

  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

require("./../configs/db.config");


const DroneModel = require('./../models/DroneModel');

DroneModel.create(drones)
.then(dbSuccess => {

    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
})