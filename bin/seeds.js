// Iteration #1
require("dotenv").config();
require("./../configs/db.config");
const Drone = require("./../models/Drone.model");
const DroneModel = require("./../models/Drone.model");

const drones = [
        { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
        { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
        { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

async function insertTestDrone(){
        try{
                await DroneModel.deleteMany(); //delete previous data when re-run this file
                const insertDrone = await DroneModel.insertMany(drones);
                console.log(insertDrone)
        }catch(err){
                console.log(err)
        }
}

insertTestDrone();

