// Iteration #1


const drones = [
    { name: "💚 Creeper XL 500 iron", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57 💜 hack", propellers: 6, maxSpeed: 24 },
    { name: "Sergio 3000 ironhack 💙 ", propellers: 9, maxSpeed: 36 }
  ];



  
const mongoose = require('mongoose');

const Dron = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";


mongoose
  .connect(MONGO_URI)
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    
    return Dron.create(drones);
  })
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);

    
    return mongoose.connection.close();
  })
  .then(() => {
    
    console.log('DB connection closed!');
  })
  .catch(err => {
    console.log(`An error occurred while creating books from the DB: ${err}`);
  });