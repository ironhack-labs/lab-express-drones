const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drone = [
  {
    name: "Crazy Pilot",
    propellers: 4,
    maxSpeed: 120,
  },
  {
    name: "Cool Pilot",
    propellers: 5,
    maxSpeed: 80,
  },
  {
    name: "Chilled Pilot",
    propellers: 3,
    maxSpeed: 60,
  },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );

    return Drone.deleteMany({});
  })
  .then((response) => {
    console.log(response);
    return Drone.insertMany(drone);
  })
  .then(() => {
    Drone.create(drone);
  })
  .then(() => {
    return Drone.find();
  })
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to DB: ", err);
  });
