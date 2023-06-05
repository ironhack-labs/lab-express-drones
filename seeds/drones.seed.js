// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [
  {
    name: "DEERC D10 Drone",
    propellers: 2,
    maxSpeed: 18,
  },
  {
    name: "DJI Air 2S Fly More Combo- Drone",
    propellers: 4,
    maxSpeed: 22,
  },
  {
    name: "Holy Stone HS175D Drone",
    propellers: 6,
    maxSpeed: 30,
  },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );

    return Drone.insertMany(drones);
  })
  .then((droneFromDB) => {
    console.log(`${droneFromDB.length} drones were added to the DB`);

    mongoose.connection.close();
  })
  .catch((e) => {
    console - log("There was a error connecting to the DB", e);
    next(e);
  });
