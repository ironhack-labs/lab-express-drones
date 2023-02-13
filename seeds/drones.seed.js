// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [{name: "Hindenburg", propellers: 2, maxSpeed: 10}, {name: "Libelle", propellers: 6, maxSpeed: 15}, {name: "Locust", propellers: 4, maxSpeed: 25} ]

  async function seed() {
    try {
      await mongoose.connect(MONGO_URI);
      let droneArray = await Drone.create(drones);
      console.log(`created ${droneArray.length} drones in the DB`);

      mongoose.connection.close();
    } catch (error) {
      console.log(error);
    }
  }

  seed();