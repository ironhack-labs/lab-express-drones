// Iteration #1
//CREATE SEED
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

//CONNECT TO DATABASE
// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

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

//SEED THE DATABASE
Drone.create(drones)
  .then((drones) => {
    console.log("Database seeded with: " + drones);
    //CLOSE THE DATABASE CONNECTION
    mongoose.connection.close();
    console.log("DATABASE SEEDING COMPLETE -- DB CONNECTION CLOSED!");
  })
  .catch((err) => console.log(err));
