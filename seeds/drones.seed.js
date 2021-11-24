// Iteration #1
//imports
const mongoose = require("mongoose")
const Drone = require ("./../models/Drone.model")
require("dotenv").config()


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

//data base
const drones = [
    { 
    name: "Creeper XL 500", 
    propellers: 3, 
    maxSpeed: 12,
    image:"https://static.turbosquid.com/Preview/001199/385/C5/drone-quadcopter-v-1-3D-model_0.jpg" 
    },
    { 
    name: "Racer 57", 
    propellers: 4, 
    maxSpeed: 20,
    image: "https://static.turbosquid.com/Preview/2019/04/30__14_17_58/drone_00122.jpgA47B4A61-0824-4D37-B0D9-C751849EF235Large.jpg" 
    },
    { 
    name: "Courier 3000i", 
    propellers: 6, 
    maxSpeed: 18,
    image:"https://m.media-amazon.com/images/I/61kV0w0k7qS._AC_SX355_.jpg" 
    }
  ];

  //Creating with model
  const createDrones = async()=>{
      const newDrone = await Drone.create(drones)
      console.log(newDrone)
      mongoose.connection.close()
  }
//export
  createDrones()