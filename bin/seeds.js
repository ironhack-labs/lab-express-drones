// Iteration #1
const DroneModel = require("../models/Drone.model")
require('../configs/db.config')
const mongoose = require("mongoose");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];


DroneModel.create(drones)
.then((droneDoc)=>{
    console.log(`there are ${drones.length} drones in the file`, droneDoc);
    mongoose.connection.close("mongodb://localhost/express-drones-dev");
})
.catch((error)=> {
    console.log(error)
})


