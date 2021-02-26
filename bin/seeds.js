// Iteration #1

require("./../configs/db.config") ;
const droneModel = require("./../models/Drone.model")

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  droneModel.insertMany(drones)
  .then(insertDrones => console.log(insertDrones))
  .catch(err => console.log(err))

mongoose.connection.close()
  
