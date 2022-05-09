// Iteration #1
// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

const Drone = require("../models/Drone.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const dronesArr = [
  { name: "DJI Air 25", img: "https://www1.djicdn.com/cms/uploads/7db3bf349c8370dfa21845b1269a79b4.png", propellers: "Quick release, low noise, folding", maxSpeed: 12, takeoffWeight: 595, diagonalLength: 302, maxFlightTime: 31},
  { name: "DJI FPV", img: "https://www1.djicdn.com/cms/uploads/e06b46a81e7ad946b607c228a937c0f4@374*374.png", propellers: "Low noise", maxSpeed: 140, takeoffWeight: 795, diagonalLength: 297, maxFlightTime: 20 },
  { name: "DJI Agras T30", img: "https://dji-official-fe.djicdn.com/cms/uploads/825969b02311cd1296b12899186acc18.png", propellers: "Quick release", maxSpeed: 18, takeoffWeight: 76.5, diagonalLength: 317, maxFlightTime: 35 },
];

Drone.create(dronesArr)
  .then((createdDrones) => {
    console.log(`Created ${createdDrones.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));
