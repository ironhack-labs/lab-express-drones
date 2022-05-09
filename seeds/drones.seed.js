const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

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

const drones = [
  {
    name: "Fast and Furious",
    propellers: 8,
    maxSpeed: 10,
    image:
      "https://dji-official-fe.djicdn.com/dps/546d1504000c0623294454654a8a82e0.jpg",
    rating: 9,
    price: "89.99",
  },
  {
    name: "Lazy drone",
    propellers: 3,
    maxSpeed: 5,
    image:
      "https://www2.djicdn.com/cms_uploads/product_comparison/cover/66/small_b2c13c6d2e601a63d3f734b652f3d9d4%402x.png",
    rating: 8,
    price: "49.99",
  },
  {
    name: "The Hulk",
    propellers: 4,
    maxSpeed: 7,
    image:
      "https://dji-official-fe.djicdn.com/dps/aa374595672eea255c4625a7e54ea86f.jpg",
    rating: 7,
    price: "89.99",
  },
];

Drone.create(drones)
  .then((results) => {
    console.log(`Created ${results.length} in the db`);
    mongoose.disconnect(() => console.log(`db disconnected`));
  })
  .catch((err) => console.log(err));
