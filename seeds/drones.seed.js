const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";
const Drone = require('../models/Drone.model')

const droneSeeds = [
    {
        name: "General Atomics MQ-9 Reaper",
        propellers: 4,
        maxSpeed: 90
    },
    {
        name: "F-450 Plum",
        propellers: 2,
        maxSpeed: 40
    },
    {
        name: "Appolo-13 Parrot Pro",
        propellers: 8,
        maxSpeed: 170
    },
]

async function seeding(seeds){

    try{
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
    
        await Drone.deleteMany
        await Drone.create(seeds)
        console.log("DB populated with ", seeds.length, " documents")
    
        await mongoose.connection.close(() => console.log('Seeding done, DB disconected'))
    }
    catch(err){
        console.log("Seeding failed : ", err)
    }
}

seeding(droneSeeds)

