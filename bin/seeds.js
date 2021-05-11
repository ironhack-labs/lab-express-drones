// Iteration #1

require("./../configs/db.config");

const DroneModel = require("../models/Drone.model");

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];


  // Iteration 1 - Create : 
  async function seedDrones(){ 
      try {
          await DroneModel.deleteMany();
          await DroneModel.create(drones);
          console.log(`${drones.length} has been created`);
          //mongoose.connection.close(()=>console.log("Connection close: end of the game!"))
      } catch (err){
          console.error(err);
      }
    }

seedDrones();