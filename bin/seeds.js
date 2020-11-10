// Iteration #1
const mongoose = require("mongoose");
const Drone = require("./../models/Drone.model");
const expressDB = "mongodb://localhost:27017/express-drones";

mongoose
  .connect(expressDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database connection successful: ${expressDB}`))
  .catch((err) => console.error(err));

const testDrones = [
  {
    name: "Drone1",
    propellers: 6,
    maxSpeed: 10,
  },
  {
    name: "Drone2",
    propellers: 4,
    maxSpeed: 8,
  },
  {
    name: "Drone3",
    propellers: 8,
    maxSpeed: 12,
  },
];

Drone.create(testDrones)
  .then((results) => {
    console.log(results);
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch((err) => console.error(err));
