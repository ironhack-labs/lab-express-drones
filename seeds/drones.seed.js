// Iteration #1
//require mongoose
const mongoose = require('mongoose');

//require book model
const Drone = require('../models/Drone.model.js');

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";


const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];


async function insertDrones(){
    try{
        //Establishing connection with our DB(database)
        let db = await mongoose.connect(MONGO_URI);
        
        //feedback regarding our connection
        console.log("Database is, for the time being, connected")

        //Create drones in our DB with the seeds array
        let dronesCreated = await Drone.create(drones);

        //feedback regarding drones create
        console.log(`Created ${dronesCreated.length} books, you're competing with Bertrand or something?`)

        //Close the connection
        await mongoose.connection.close()
    }
    catch(error){
        console.log("An error occurred while connecting, you can't compete with Bertrand", error)
    }
}

insertDrones();