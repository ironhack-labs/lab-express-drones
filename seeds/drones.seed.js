// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-express-drones";

const drones = [
  { name: "Tornado", propellers: 6, maxSpeed: 20 },
  { name: "Breeze", propellers: 4, maxSpeed: 15 },
  { name: "Bright Sky", propellers: 4, maxSpeed: 10 }
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to MongoDB: "${x.connections[0].name}"`
    );
  })
  .then(() => {
    
    return Drone.create(drones);
  })
  .then((dronesCreated) => {
    console.log(`${dronesCreated.length} drones have successfully been created!`);
    return mongoose.connection.close()
  })
  .then(() => {
    console.log(`Database closed successfully!`);
  })
  .catch((error) => {
    console.error("Error while connecting to MongoDB: ", error);
  });