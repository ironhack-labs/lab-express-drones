const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

// Iteration #1]
const dronesArr = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

mongoose
  .connect("mongodb://localhost/drones", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => Drone.create(dronesArr))
  .then(() => {
    console.log("drones created", dronesArr);
  })
  .catch((error) => {
    console.log("error ", error);
  });
//   .finally(() => {
//     mongoose.connection.close();
//     console.log("Connection closed");
//   });
