// Iteration #1

//Connects to the db
//Insert an array of books
const mongoose = require('mongoose')

const Drone = require('../models/Drone.model') //no need for .js at end - 10

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  async function seed(){ // 12-16
    try {
        //connect

        await mongoose.connect(MONGO_URI)

        //insert the books

        let dbDrone = await Drone.create(drones) // 18

        //check if it works
        
        console.log(`Created ${dbDrone.length} drones on the DB`); // 19



        mongoose.connection.close()
        
    } catch (error) {
        console.log(error);
        
    }
  }

  seed(); //21