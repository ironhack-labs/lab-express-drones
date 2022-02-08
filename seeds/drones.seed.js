// Iteration #1

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

mongoose
  .connect("mongodb://127.0.0.1:27017/lab-express-drones", {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

Drone.deleteMany({}).then(console.log("Deleted all drones."));

Drone.create(drones)
  .then((result) => {
    return console.log(result.length);
  })
  .then((result) => mongoose.connection.close())
  .catch((err) => console.log(err));
