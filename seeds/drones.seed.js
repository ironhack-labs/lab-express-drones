// Iteration #1
const mongoose = require("mongoose");

const Drone = require("../models/Drone.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
  })
  .then(() => {
    Drone.insertMany([
      { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
      { name: "Racer 57", propellers: 4, maxSpeed: 20 },
      { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
    ])
      .then((names) => {
        for (let i = 0; i < names.length; i++) {
          console.log(names[i].name);
        }
      })
      .catch((error) => {
        console.error("error creating drones", error);
      });
  })
  .then(() => {
    console.log(`Disconnecting from the database... `);

    mongoose.disconnect((err) => {
      if (err) {
        console.log("failed to disconnect");
      }
    });
  });
