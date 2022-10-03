const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
  {
    name: "Atomics MQ-9 Reaper",
    propellers: 4,
    maxSpeed: 12,
  },
  {
    name: "Big Warrior",
    propellers: 3,
    maxSpeed: 10,
  },
  {
    name: "Killer",
    propellers: 2,
    maxSpeed: 8,
  },
  {
    name: "Mega Drone",
    propellers: 4,
    maxSpeed: 18,
  },
  {
    name: "Creeper XL 500",
    propellers: 3,
    maxSpeed: 12,
  },
  {
    name: "Racer 57",
    propellers: 4,
    maxSpeed: 20,
  },
  {
    name: "Courier 3000i",
    propellers: 6,
    maxSpeed: 18,
  },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo Database: "${x.connections[0].name}`);
    return Drone.create(drones);
  })
  .then((dronesFromDb) => {
    console.log(dronesFromDb);
    console.log(`${dronesFromDb.length} Drones were created successfully`);

    return mongoose.connection.close();
  })
  .then(() => {
    console.log("DB connection is closed");
  })
  .catch((error) => {
    console.log("Error occurred while creating drones", error);
  });
