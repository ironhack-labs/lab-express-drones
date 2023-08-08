//Require Mongoose
const mongoose = require ('mongoose');

// require Model
const Drone = require ('../models/Drone.model.js');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [
    {
        name:"Fly MEHDI 3000",
        propellers: 6,
        maxSpeed: 18,
    },
    {
        name:"Zeca Galhão XZ-7 PLOP",
        propellers: 4,
        maxSpeed: 14,
    },
    {
        name:"Bin Nader 9-11",
        propellers: 8,
        maxSpeed: 18,
    },
    
]

async function insertDrones(){
    try{
        // establishing connection with our DB
        let db = await mongoose.connect(MONGO_URI);

        // feedback regard our connection
        console.log("Database is now connected");

        // create books in our db with the seeds array
        let dronesCreated = await Drone.create(drones);

        // feedback about books creation
       console.log(`Created ${dronesCreated.length} drones!`)

        //Close the connection
        await mongoose.connection.close();
        
        }
    catch (error){
        console.log("An error ocurred while connecting to DB, error", error)
    }
}
insertDrones()
