// Iteration #1


require('../configs/db.config');
const { Mongoose } = require('mongoose');
const DroneModel = require('../models/drone');

const dronesData = [
    {
        name: "droneTest7",
        propellers: 7,
        maxSpeed: 77
    },
    {
        name: "droneTest8",
        propellers: 8,
        maxSpeed: 88
    },
    {
        name: "droneTest9",
        propellers: 9,
        maxSpeed: 99
    }
]

DroneModel.insertMany(dronesData)
  .then((drones) => console.log(drones.map((drone) => drone.name)))
    .then(() => Mongoose.disconnect)
      .then (() => console.log("connection closed"));

