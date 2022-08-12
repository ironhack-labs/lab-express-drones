// Iteration #1
// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo just to make sure I run ! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });




//Import the drone model
const Drone = require("../models/Drone.model");

//import the seed data -> array of drone data objects
const drones = require("./drone-seed.json");

//Add the seed data to the database
Drone.create(drones)
//Promise -> resolve -> console.log -> seed data added to the database
    .then((drones) => {
        //outputs how many drones were added to the database
        console.log(`${drones.length} drones added to the database`);
//Close the connection to the database
        mongoose.connection.close();
    }
    )
//Promise -> reject -> console.log -> error message
    .catch((err) => {
        console.log(err);
        mongoose.connection.close();
    }
    );
