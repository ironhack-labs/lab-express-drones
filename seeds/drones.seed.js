// Iteration #1
let mongoose = require("mongoose");

let Drone = require('../models/Drone.model.js');

let MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

let drones = [
    {name: "Creeper XL 500",propellers: 3, maxSpeed: 12 },
    {name: "Racer 57", propellers: 4, maxSpeed: 20 },
    {name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

async function createDrones(){
    try{
        let db = await mongoose.connect(MONGO_URI);
        console.log(`Connected to Mongo Database: ${db.connections[0].name}`);
        let dronesCreated = await Drone.create(drones);
        console.log(`Created ${dronesCreated.length} drones!`); 
        await mongoose.connection.close();
    }
    catch(error){
        console.log('An error occurred while connecting to Db', error);
    }
  }

  createDrones();