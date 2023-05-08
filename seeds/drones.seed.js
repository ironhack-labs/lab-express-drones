//Require Mongoose
const mongoose = require('mongoose');

//Require book model
const Drone = require('../models/Drone.model.js');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  async function createDrones(){
    try{
        let db = await mongoose.connect(MONGO_URI);
        //feedback about the connection
        console.log(`Connected to MongoDB:${db.connections[0].name}`);
        //Create new document inside books collection
        let dronesCreated = await Drone.create(drones);
        //feedback regarding books creation
        console.log(`Created ${dronesCreated.length} drones!`);
        //closing the connection
        await mongoose.connection.close();
    }
    catch(error){
        console.log('Fucking error while connecting to Db', error)
    }
  }

  createDrones();