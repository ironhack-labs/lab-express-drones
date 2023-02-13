const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost/lab-express-drones";
const Drone = require("../models/Drone.model");

const newDrone = [
  {
    name: "the fast",
    propellers: 2,
    maxSpeed: 100,
  },
];

const createDroneDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    await Drone.create(newDrone);
    console.log("drone created");

    await mongoose.connection.close();
  } catch (err) {}
};
createDroneDb();
// mongoose
//   .connect(MONGO_URI)
//   .then(() => {
//     Drone.create(newDrone);
//   })
//   .then(() => {
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo: ", err);
//   });
