// Iteration #1
const mongoose = require('mongoose');
const Drones = require('../models/Drone.model.js');
 
const DB_NAME = 'DronesDB';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const droneInfo = [
    {
        name : "Falcon 3000",
        propellers : 20,
        maxSpeed : 15
    },
    {
        name : "Romanoff XCVB",
        propellers : 20,
        maxSpeed : 15
    },
    {
        name : "Cempasuchil NOV",
        propellers : 20,
        maxSpeed : 15
    }
]

Drones.create(droneInfo)
  .then(infoDrones => {
    console.log(`Created ${infoDrones.length} drones`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));