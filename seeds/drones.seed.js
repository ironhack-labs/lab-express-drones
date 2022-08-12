const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
require("../db/index.js");

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(`Connected to database ${x.connections[0].name}`);
  })
  .catch((err) => console.log("Error connecting to mongo: ", err));

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
    console.log(drones);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(`An error occurred while creating drones from the DB: ${err}`);
  });
