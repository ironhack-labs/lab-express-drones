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
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    Drone.collection.drop();
    
    Drone.create(drones)
        .then(dronesFromDB => {
            console.log({dronesFromDB})
        }).catch(err => console.log(`Error seeding database with drones: ${err}`))

    setTimeout(() => {
        mongoose.disconnect();
    }, 5000);
  }).catch(err => console.error('Error connecting to mongo', err));
