const mongoose = require("mongoose");

const Dron = require("./../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const connectionString = "mongodb://127.0.0.1:27017/dron-app";

mongoose
  .connects(connectionString)
  .then((x) => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);
    return Dron.create(drones);
  })
  .then((dronsFromDB) => {
    console.log(`Created ${dronsFromDB.length} drons`);
    return mongoose.connection.close();
  })
  .then(() => {
    console.log("DB connection closed!");
  })
  .catch((err) => {
    console.log(`An error occurred while creating books from the DB: ${err}`);
  });
