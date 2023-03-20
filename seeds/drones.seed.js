// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/drones-project';

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose
    .connect(MONGO_URI)
    .then(x => {
        console.log(`Connection successful! ${x.connections[0].name}`);
        
        return Drone.deleteMany({});
    })
    .then((response) => {
        console.log(`DB is now empty. Deleted ${response.deletedCount} drones.`)
        return Drone.create(drones);
    })
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones.`)
    })
    .catch((e) => {
        console.error('Error connecting to the DB:', e);
    })
    .finally(() => {
        mongoose.connection.close();
    });

