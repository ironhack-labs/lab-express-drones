// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";


const drones = [
    {
    name: "Flying Cat",
    propellers: 4,
    maxSpeed: 18
    },
    {
    name: "Anon Turbo X567 ZB",
    propellers: 6,
    maxSpeed: 20    
    },
    {
    name: "Granny Plane",
    propellers: 2,
    maxSpeed: 5
    },
]

async function seeds(){
   try {
   const x = await mongoose.connect(MONGO_URI)
   console.log(`Connected to: ${x.connections[0].name} `);
   
   let createdDrones = await Drone.create(drones); 
    console.log(`Sucessfuly created ${createdDrones.length} Drones`);
 
   x.disconnect();
 }
    catch (error) {
    console.log(error);
 }
 } 
 
 seeds();
