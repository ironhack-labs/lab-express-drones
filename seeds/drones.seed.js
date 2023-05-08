//require Mongoose
const moongoose = require ("mongoose");
// require Drone Model
const Drone = require ("../models/Drone.model.js");
const { default: mongoose } = require("mongoose");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-express-drones";


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


  async function insertDrones(){
    try{
        let db = await mongoose.connect(MONGO_URI)
        //feedback
        console.log(`connected to mongoDB ${db.connections[0].name}`);
        //create new documents
        let dronesCreated = await Drone.create(drones);
        //feedback for drone creation
        console.log(`Created ${dronesCreated.length} drones!`);
        //closing the connection
        await mongoose.connection.close();
    }

    catch(error){
        console.log(`An error occurred while connecting to Db`,error)

    }
}

insertDrones();