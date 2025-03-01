// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

// Connect to the database
require("../db");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
  { name: "Phantom Pro", propellers: 4, maxSpeed: 16 },
  { name: "Explorer 9", propellers: 8, maxSpeed: 22 },
  { name: "Mavic Air", propellers: 4, maxSpeed: 19 },
  { name: "Inspire 2", propellers: 4, maxSpeed: 25 },
  { name: "Agras T30", propellers: 6, maxSpeed: 15 },
  { name: "Matrice 300", propellers: 8, maxSpeed: 23 },
  { name: "Mini 3 Pro", propellers: 4, maxSpeed: 14 },
];

// Delete all existing drones first
Drone.deleteMany()
  .then(() => {
    console.log("All existing drones deleted");

    // Create new drones
    return Drone.create(drones);
  })
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
    dronesFromDB.forEach((drone) => {
      console.log(`- ${drone.name} (${drone.propellers} propellers, max speed: ${drone.maxSpeed})`);
    });

    // Close the database connection
    return mongoose.connection.close();
  })
  .then(() => {
    console.log("Database connection closed");
  })
  .catch((err) => {
    console.error("Error seeding data:", err);
    mongoose.connection.close();
  });
