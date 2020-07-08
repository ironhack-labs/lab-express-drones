const mongoose = require("mongoose");
require("../configs/db.config");

const Drone = require("../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

(async function seedDb() {
  try {
    const result = await Drone.create(drones);
    console.log(`Success! ${result.length} drones added to db.`);

    await mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
})();