// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/lab-express-drones';


const drones = [
    {
        name: "NanoFlyTronics",
        propellers: 4,
        maxSpeed: 12,
    },
    {
        name: "Rocketed",
        propellers: 3,
        maxSpeed: 10,
    },
    {
        name: "SkyShot",
        propellers: 4,
        maxSpeed: 17,
    },
    {
        name: "Tornado Drones",
        propellers: 5,
        maxSpeed: 20,
    },
    {
        name: "Bumble Bee",
        propellers: 2,
        maxSpeed: 6,
    },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );


})
.then( (response) => {
  console.log(response);

  return Drone.insertMany(drones);
})
.then(dronesFromDB => {
  console.log(`Created ${dronesFromDB.length} drones`);

  // Once created, close the DB connection
  mongoose.connection.close();
})
.catch((err) => {
  console.error("Error connecting to DB: ", err);
});