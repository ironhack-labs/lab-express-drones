// Iteration #1
//require mongoose
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

  const drones = [

    {
        name:'Apocalypto 3000',
        propellers: 8,
        maxSpeed: 200,
    },

    {
        name:'Butterfree',
        propellers: 2,
        maxSpeed: 50,
    },

    {
        name:'MK-2020',
        propellers: 4,
        maxSpeed: 100,
    }
  ];


const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    Drone.create(drones);
    mongoose.connection.close();
    
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

