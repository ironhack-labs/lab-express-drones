const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')
require('../db')

const fillDB = async () => {
    const drones = [
        { name: "Creeper XL 500", propellers: 3, speed: 12 },
        { name: "Racer 57", propellers: 4, speed: 20 },
        { name: "Courier 3000i", propellers: 6, speed: 18 }
    ];
    try {
        const dronesDB = await Drone.create(drones)
        console.log(dronesDB);
        await mongoose.connection.close()
    } catch (error) {
        console.log(error);
    }
}

fillDB()