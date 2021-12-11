// Iteration #1


// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const Drone = require('../models/Drone.model')


const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose.connect(MONGO_URI)

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  Drone.create(drones)
  //console.log("the drones", drones)
  .then(dronesFromDB =>{
    console.log("drones created",dronesFromDB.length)
    mongoose.connection.close();
  })
  .catch(err => console.log("Error", err))