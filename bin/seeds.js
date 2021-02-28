require("./../configs/db.config");
const droneModel = require("./../models/Drone.model");

const drones = [
    { name: 'Bill Evans', propellers: 3, maxSpeed: 12 },
    { name: 'Coltrane', propellers: 4, maxSpeed: 20 },
    { name: 'KNX', propellers: 6, maxSpeed: 18 }
  ];

  droneModel.create(drones)
  .then((dronedoc) => {
    console.log(dronedoc);
  })
  .catch((error) => {
    console.log(error);
  });
  mongoose.connection.close()