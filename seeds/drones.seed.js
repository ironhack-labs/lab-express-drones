// Iteration #1

// Require Mongoose
const mongoose = require('mongoose');

// Require Drone Model
const Drone = require('../models/Drone.model.js');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";


const drones = [
    { name: "Creeper XL 500",
     propellers: 3,
      maxSpeed: 12 },
    
      { name: "Racer 57",
     propellers: 4,
      maxSpeed: 20 },
    
      { name: "Courier 3000i",
     propellers: 6,
      maxSpeed: 18 }
  ];

  async function insertDrones(){
    try{
        let db = await mongoose.connect(MONGO_URI);
        console.log(`Connected to Mongo Database: ${db.connections[0].name}`);
        let DronesCreated = await Drone.create(drones);
        console.log(`Created ${DronesCreated.length} drones!`); 
        await mongoose.connection.close();
    }
    catch(error){
        console.log(error);
    }
  }


  insertDrones();