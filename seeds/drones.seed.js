const express = require('express');
const Drone = require("../models/drone")
const connectDB = require("../db/index");
const { default: mongoose } = require('mongoose');

require("dotenv").config()

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/lab-express-drones';



const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

mongoose.connect(MONGO_URI ) 


Drone.insertMany(drones)
  .then((x)=>{
      console.log(`Connected to database:"${x.connections[0].name}"`);
  })
  .catch((err)=>{
      console.log("Errors in inserting drones:", err)
       })