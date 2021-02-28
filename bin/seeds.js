// Iteration #1
require("../configs/db.config")

const { insertMany } = require("../models/Drone.model");
const DroneModel = require("../models/Drone.model")

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

function create(arr){
    DroneModel.create(arr)
    .then((dbSuccess) => {
        console.log(`${arr.length} drones have been created`)
    })
    .catch((err) => {
        console.log(err)
    });
}

//create(drones);