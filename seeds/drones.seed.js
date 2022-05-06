// Iteration #1
const drones = [
    {name:"Creeper XL 500",propellers:3, maxSpeed:12},
    {name:"Race 57", propellers:4, maxSpeed:20},
    {name:"Courier 3000i",propellers:6, maxSpeed:18}
];

const  Mongoose  = require('mongoose');
const Drone = require('../models/Drone.model');
require('../db');

const droneSeed = async () => {
    try {
        await Drone.deleteMany();
        await Drone.create(drones);
        console.log(`${drones.length} drones created`);

        await Mongoose.connection.close();
    } catch(error) {
        console.log(error);
    }
}

droneSeed();


