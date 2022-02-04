// Iteration #1
const mongoose = require('mongoose')
const Drone = require('./../models/Drone.model')
const connectDB	= require("./../db/index")


require('dotenv').config()

connectDB()

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

const createSeedDrones = async (data) =>{
  try {
    const createdDrones = await Drone.create(data);
    console.log(createdDrones);

    //desconecta la peticion de la base de datos
    return mongoose.connection.close();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

createSeedDrones(drones)