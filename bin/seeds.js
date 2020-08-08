// Iteration #1

require('../configs/db.config');

const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

const Drone = mongoose.model('Drone', droneSchema);

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

Drone.create(drones)
.then(dronesFromDb => {
    console.log('Created drones',dronesFromDb);
    mongoose.disconnect();
})
.catch(err => console.log('Cannot create Drones', err));

//console.log (droneSchema);