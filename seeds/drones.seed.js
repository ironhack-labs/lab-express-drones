// Iteration #1
const mongoose = require("mongoose");

const Drone = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones"

const drones = [
    {name:'MQ-9 Reaper', propellers: 1, maxSpeed: 113.9},
    {name:'eq-4b global hawk', propellers: 1, maxSpeed: 177.8},
    {name:'RQ-170 Sentinel', propellers: 1, maxSpeed: 263.9},
];

async function insertDrones(){
    try{
        let db= await mongoose.connect(MONGO_URI);
        console.log(`Connected to Mongo Database: ${db.connections[0].name}`);

        let dronesCreated = await Drone.create(drones);
        console.log(`Created ${dronesCreated.length} drones!`);

        await mongoose.disconnect();
    }
    catch(err){
        console.log(err);
    }
}

insertDrones()


