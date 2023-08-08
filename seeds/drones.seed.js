//Iteration #1
const mongoose = require ('mongoose');
const Drone = require ('../models/Drone.model.js');// 


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];
  const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";


  async function insertDrones (){
    try{
        let db = await mongoose.connect(MONGO_URI);
        console.log("Database connection");

        let dronesCreated = await Drone.create(drones);
        console.log(`Created ${dronesCreated.length} drones`)

        await mongoose.connection.close();

    }
    catch(error){
        console.log("An error occurred while connecting to DB", error);
        
    }
}
console.log("Inserting drones");
insertDrones();