// Iteration #1

const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
  
const drones = [
{ 
    name: "Creeper XL 500", 
    propellers: 3, 
    maxSpeed: 12 
},
{ 
    name: "Racer 57", 
    propellers: 4, 
    maxSpeed: 20 
},
{ 
    name: "Panthom 3", 
    propellers: 3, 
    maxSpeed: 22 
}, 
  ];

  async function seed() {
    try {
        let dbDrones = await Drone.create(drones)
        console.log(`Created ${dbDrones.length} drones on the DB`)
    } catch (error) {
        console.log(error)
    }
  }

  seed()


