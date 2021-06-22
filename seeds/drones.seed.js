// Iteration #1
const mongoose = require("mongoose");
const drones = require("../drones.json");
const Drone = require("../models/Drone.model");

require("../db/index");


const MONGO_URI = "mongodb://localhost:27017/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });



Drone.collection.drop();



Drone.create(dronesData, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.forEach((drone) => {
      console.log(drone.droneName);
    });
  }

  mongoose.connection.close();
});
