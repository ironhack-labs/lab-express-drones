// Iteration #1
/*
const express = require('express');
const Drone = require("../models/drone")
const connectDB = require("../db/index")

require("dotenv").config()

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


  const createDrones = async (data) => {
    try {
      const createdDrones = await Drone.create(drones)
      console.log(createdDrones)
        return mongoose.connection.close()
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }

  createDrones(drones);

  
*/
const Drone = require("../models/Drone.model")
const mongoose = require("mongoose");

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
  ]

require("../db")

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

Drone.insertMany(drones)
  .then((x)=>{
      console.log("Drones inserted:", x);
  })
  .catch((err)=>{
      console.log("Errors in inserting drones:", err)
  })
  .finally(()=>{
    console.log("Every thing is OK")  
    mongoose.connection.close()
  })