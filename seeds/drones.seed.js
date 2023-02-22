// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .set("strictQuery", false)
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );

    Drone.deleteMany({}).then(
      Drone.create(droneSeed).then((data) => {
        console.log(`${data.length} drones created successfully!`);
        mongoose.connection.close();
        console.log("DB connection closed!");
      })
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const droneSeed = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];
