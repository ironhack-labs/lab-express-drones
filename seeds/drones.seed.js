// Iteration #1

const mongoose = require('mongoose');

// Require Drone Model
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

    // feedback regarding our connection
    console.log('database is now connected');

    // Create books in our database with the seeds array
    let dronesCreated = await Drone.create(drones);

    // Feedback about books creation
    console.log(`Created ${dronesCreated.length} drones!`);

    // Close the connection
    await mongoose.connection.close();

}
catch(error){
    console.log('Got this error while connecting to DB: ', error)
}
};

createDrones();