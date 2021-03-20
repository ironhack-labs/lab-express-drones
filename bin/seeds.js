// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

mongoose
  .connect('mongodb://localhost/express-drones-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`second connection`)

    Drone.create(drones)
    .then(() => {
        console.log('Drones inserted into database.');

        mongoose.disconnect();
    })
    .catch(error => console.log(error))

  })
  .catch(err => console.error('Error connecting to mongo', err));
