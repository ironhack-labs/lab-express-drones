// Iteration #1
const mongoose = require("mongoose");
const DroneModel = require("../models/Drone.model");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [{
    name: "drone1", 
    propellers: 1,
    maxSpeed: 10

}, {
    name: "drone2", 
    propellers: 2,
    maxSpeed: 20
},{
    name: "drone3", 
    propellers: 3,
    maxSpeed: 30
}]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return DroneModel.create(drones)
    })
  .then ((message) => {
        console.log(newDrones.length);
        mongoose.connection.close();
   })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
