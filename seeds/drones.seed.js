// Iteration #1
const drones = [{
    name: "Air Smiley",
    propellers: 4,
    maxSpeed: 18,
},
{
    name: "ABeeDrone",
    propellers: 3,
    maxSpeed: 15,
},
{
    name: "Bright Skies",
    propellers: 6,
    maxSpeed: 25,
}];

// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .then(() => {
        Drone.create(drones);
        console.log("Success, data seeded correctly to the db");
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    })
    .finally(() => {
        mongoose.connection.close();
        console.log("Closed the DB connection");
    });