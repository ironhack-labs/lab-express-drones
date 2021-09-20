// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12, image: "/images/dron1.png" },
  { name: "Racer 57", propellers: 4, maxSpeed: 20, image: "/images/dron2.jpg" },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18, image: "/images/dron3.jpg" },
];

Drone.create(drones)
  .then(() => {
    console.log(`Drones Created`);
    mongoose.connection.close();
    process.exit(0);
  })
  .catch((e) => console.log(e));
