// Iteration #1

const mongoose = require("mongoose")
const Drone = require("../models/Drone.model")

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";



  const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  async function seed(){
    try{  
        //connect
        await mongoose.connect(MONGO_URI)
    
        
        let dbDrones = await Drone.create(drones)
        //check if it works
        console.log(`Created ${dbDrones.length} books on the DB`)
    

    mongoose.connection.close()// ou moongose.disconnect()
    }catch(error){
        console.log(error)
    }
  }

  seed()

