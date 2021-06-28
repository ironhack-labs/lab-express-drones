// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });


  const drones = [
      {
        name: "Dronus Maximum",
        propellers: 8,
        maxSpeed: 25,    
      },
      {
        name: "El Drone",
        propellers: 6,
        maxSpeed: 21,    
      },
      {
        name: "Bicho Voador",
        propellers: 4,
        maxSpeed: 17,    
      }
  ];

  Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating drones from the DB: ${err}`)
  );