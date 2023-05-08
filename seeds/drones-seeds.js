// Require Mongoose

const mongoose = require('mongoose');

// Require Book Model
const Drone = require('../models/Drone.model.js');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";
    
const drones = [
        { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
        { name: "Racer 57", propellers: 4, maxSpeed: 20 },
        { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
      ];

      async function insertDrones(){
        try {
            let db = await mongoose.connect(MONGO_URI);
            // Feedback about the connection
            console.log(`Connected to Mongo Database: ${db.connections.name}`)
            // Create new documents inside drones collection
            let dronesCreated = await Drone.insertMany(drones);
            // feedback regarding books creation
            console.log(`Created ${dronesCreated.length} drones!`);
            // Closing the connection
            await mongoose.connection.close();
        }
        catch(error) {
            console.log('An error occurred while connection to Db', error);
        }
    }
    insertDrones();