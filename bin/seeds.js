// Iteration #1
require("./../configs/db.config");

const DroneModel = require("./../models/Drone.model");

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  // seeding = Create (CRUD)

async function seedDrones() {
    try {
      await DroneModel.deleteMany();
      await DroneModel.insertMany(drones);
      console.log("done");
      mongoose.connection.close();
    } catch (err) {
      console.error(err);
    }
  }
  seedDrones();