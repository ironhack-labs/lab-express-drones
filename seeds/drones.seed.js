// Iteration #1
const mongoose = require ("mongoose");
const Drones = require ("../models/Drone.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
    { name: "Creeper XL 500", 
    propellers: 3, 
    maxSpeed: 12
 },
    { name: "Racer 57",
     propellers: 4,
      maxSpeed: 20
     },
    { name: "Courier 3000i",
     propellers: 6, 
     maxSpeed: 18 
    }
  ];

async function seed(){
    try{
        //connect
        await mongoose.connect(MONGO_URI)
        // Insert Drones
        let dbDrones = await Drones.create(drones);
        // Check if it works
        console.log(`Created ${dbDrones.length} drones on the DB`)

mongoose.connection.close()
    } catch (error){
        console.log (error);
    }
  };

  seed();