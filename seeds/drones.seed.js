// Iteration #1

/* 
const mongoose = require('mongoose')
const drones = require('../models/Drone.model')

const MONGO_URI = 
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones"
 */

// Code provided in db/index.js

// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose")

const Drones = require("../models/Drone.model")

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

/* const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones"; */

  const MONGO_URI = 
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones"


    
mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


// Array of the 3 requested drones
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

async function seed() {
    try {
            //to connect:
        await mongoose.connect(MONGO_URI)

        let dbDrones = await Drones.create(drones) 

        console.log(`Created ${dbDrones.length} drones on the database`)

        mongoose.connection.close()
    } catch (error) {
        console.log(error)
    }
}

seed();