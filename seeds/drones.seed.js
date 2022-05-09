// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

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

const drones = [
  {
    name: "Creeper XL 500",
    propellers: 3,
    maxSpeed: 12,
    image: "images/drone.jpg",
  },
  { name: "Racer 57", propellers: 4, maxSpeed: 20, image: "images/drone.jpg" },
  {
    name: "Courier 3000i",
    propellers: 6,
    maxSpeed: 18,
    image: "images/drone.jpg",
  },
];

Drone.create(drones)
  .then((createdDrones) => {
    console.log(`${createdDrones.length} Drones added to the db`);
    mongoose.disconnect(() => console.log("Disconnected from the DB"));
  })
  .catch((error) => console.log(error));
