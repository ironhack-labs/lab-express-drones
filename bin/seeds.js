const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const DB_NAME = 'express-drones-dev';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const drones = [
    {
      name: 'Drone # 1 - Maic AIR',
      propellers: '3 UAVOS',
      maxSpeed: 14,
    },

    {
        name: 'DRONE # 2 - weak',
        propellers: '6 MEIZIK',
        maxSpeed: 7,
      },
 
      
      {
        name: 'drone # 3 - super hyper',
        propellers: '8 ARNOLD',
        maxSpeed: 18,
      }, 
  ];

  Drone.create(drones)
  .then(dronesFromDB => {
      console.log(`Created ${dronesFromDB.length} dRONES!`);
      mongoose.connection.close();
  })
  .catch(err => console.log(`Error : ${err}`));

  
  