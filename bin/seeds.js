// Iteration #1
require("./../configs/db.config"); // fetch the db connection
const DroneModel = require("./../models/Drone.model"); // fetch the model to validate our user document before insertion (in database)

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

(async function create() {
  try {
    await DroneModel.deleteMany(); 
    const inserted = await DroneModel.insertMany(drones); 
    console.log(
      `${inserted.length} drones have been entered in the database !`
    );
  } catch (err) {
    console.error(err);
  }
})();