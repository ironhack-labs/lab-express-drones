// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lab-express-drones';

const drones= [

{
    name: "Turbo Mega",
    propellers: 4,
    maxspeed: 69,

},
{
    name: "Fast and Furious",
    propellers: 6,
    maxspeed: 420,


},
{
    name: "Super Bad",
    propellers: 2,
    maxspeed: 15,


}
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    return Drone.deleteMany({}); //WARNING: this will delete all books in your DB !!

  })
  Drone.create(drones)
  .then((dronesCreatedFromDb) => {
    console.log(`Created ${dronesCreatedFromDb.length} drones`);
  })
  .then( (response) => {
    console.log(response);

    return Drone.create(drones);
  })
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to DB: ", err);
  });
