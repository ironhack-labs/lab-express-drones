// Iteration #1

require("./../configs/db.config.js");

const DroneModel = require("./../models/Drone")

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];


  async function seedDrone() {
    try {
      await DroneModel.deleteMany();
      await DroneModel.insertMany(drones);
      console.log("done");
    } catch (err) {
      console.error(err);
    }
  }

  seedDrone()