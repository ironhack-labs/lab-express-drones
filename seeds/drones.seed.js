// Require Mongoose 
const mongoose = require('mongoose');
// Require Drone Model 

const Drone = require('../models/Drone.model.js'); 
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  async function insertDrone(){
    try{
        let db = await mongoose.connect(MONGO_URI);
        //FEEDBACK ABOUT CONNECTION
        console.log(`Connected to MongoDB database: ${db.connections[0].name}`);

        // Create new documents inside books collection 
        
        let dronesCreated = await Drone.create(drones);
/*         let findAllDronesInDatabase = await Drone.find();
        console.log(findAllDronesInDatabase); */
        // feedback about book creation 
        console.log(`Created ${dronesCreated.length} drones!`);
       
        //close connection 
        await mongoose.connection.close();
    }
    catch(error){

        console.error(`Error occurred: ${error.message}`);   
     }

  };

  insertDrone(); //remember to call the function 