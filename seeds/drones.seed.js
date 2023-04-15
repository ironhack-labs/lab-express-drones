// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];
// Connects to the database
require("../db");

Drone.create(drones) 
.then((dronesFromDB)=>{
    console.log(`Created ${dronesFromDB.length} drones.`)
    return  mongoose.connection.close();
        })
.then(()=>console.log("DB connection closed"))
.catch((error) => console.error("Error to connecting to the DB", error));
  

