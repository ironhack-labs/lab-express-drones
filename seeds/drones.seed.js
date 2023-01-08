// Iteration #1

const mongoose = require("mongoose");

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

const DroneModel = require("../models/DroneModel");

let drones = [
  {
    name: "Athos",
    propellers: 3,
    maxSpeed: 13,
  },
  {
    name: "Porthos",
    propellers: 5,
    maxSpeed: 21,
  },
  {
    name: "Aramis",
    propellers: 8,
    maxSpeed: 34,
  },
];

// DroneModel.create(drones)
//   .then((addedDrones) => {
//     addedDrones.forEach((eachDrones) => console.log(eachDrones.name)); // to console.log each added drone name

//     // to close the DB after data insertion
//     mongoose.connection
//       .close()
//       .then(() => console.log("Database closed"))
//       .catch((err) => console.log("Error closing DB", err));
//   })
//   .catch((err) => {
//     console.log("Error with mongoose method", err);
//   });

DroneModel.create(drones)
  .then((addedDrones) => {
    console.log(`Created ${addedDrones.length} drones`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating drones from the DB: ${err}`)
  );
