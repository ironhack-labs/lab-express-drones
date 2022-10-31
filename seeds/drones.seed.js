// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drone = [
    {
        name: "Drone1",
        propellers: 1, 
        maxSpeed: 11,
    }, 
    {
        name: "Drone2",
        propellers: 3, 
        maxSpeed: 13,
    }, 
    {
        name: "Drone3",
        propellers: 5, 
        maxSpeed: 15,
    }, 
]

async function seeds(){
    try{
        const x = await mongoose.connect(MONGO_URI)
        console.log(`Connected to: ${x.connections[0].name}`);

        let createdDrones = await Drone.create(drone);
        console.log(`Successfuly created ${createdDrones.length}`)
    
        x.disconnect();
    } catch (error){
        console.log(error);
    }

}

seeds();