// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
    {
        name: "Dronita",
        propellers: 4,
        maxSpeed: 8,
    },
    {
        name: "Dronatella",
        propellers: 8,
        maxSpeed: 10,
    },
    {
        name: "Super Dron",
        propellers: 7,
        maxSpeed: 12,
    },
]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);
    return Drone.create(drones);
  })
  .then((dronesCreados) => {
    console.log(`Created ${dronesCreados.length} books`);

    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log("DB connection closed!");
  })
  .catch((err) => {
    console.log(`An error occurred while creating books from the DB: ${err}`);
  });



