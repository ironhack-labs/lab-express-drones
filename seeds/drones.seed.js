// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

  const drones = [
    {
      name: "General Atomics MQ- 9 Reaper",
      propellers: 4,
      maxSpeed: 18,
    },
    {
      name: "Millenium Falcon",
      propellers: 8,
      maxSpeed: 30,
    },
    {
      name: "Honeybee",
      propellers: 2,
      maxSpeed: 5,
    },
  ];

  Drone.create(drones)
      .then(createdDrones => {
          console.log(`created ${createdDrones.length}`)
          mongoose.disconnect(() => console.log('Disconnected'))
      })
  .catch((err) => console.log(err));
