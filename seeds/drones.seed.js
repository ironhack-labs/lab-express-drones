// Iteration #1
require('../db')

const DroneModel = require('../models/Drone.model')
const mongoose = require('mongoose')

DroneModel.insertMany([
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ])
    .then((x) => {
        console.log(x.length);
        mongoose.connection.close()
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
        mongoose.connection.close()
    });





