// Iteration #1

require("../configs/db.config");

const DroneModel = require("../models/Drone.model");


const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

DroneModel.create(drones)
.then(dbSuccess => {
    console.log(dbSuccess);
    console.log(drones);
    // mongoose.connection.close();
})
.catch(dbError => {
    console.log(dbError);
})

// DroneModel.insertMany(drones)
// .then( success => {
//     console.log(dbSuccess);
// })

