const mongoose = require("mongoose");
const Drone = require("../models/Drone.model")

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";


const drone = [
    {
        name: "DJI Mavic Air",
        propellers: 4,
        maxSpeed: 68,
    },
    {
        name: "DJI Mavic Pro",
        propellers: 4,
        maxSpeed: 65,
    },
    {
        name: "DJI Mavic Mini",
        propellers: 4,
        maxSpeed: 47,
    },
];

async function seed(){
    try {
        // Connect
        await mongoose.connect(MONGO_URI)

        let dbDrone = await Drone.create(drone)
        console.log(`Created ${dbDrone.length} drones on the DB`)


        mongoose.connection.close()

    } catch (error) {
        console.log(error);
    }
  }

  seed();
