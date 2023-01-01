const mongoose = require ("mongoose");

//export the Drone model
const Drone = require ('../models/Drone.model');



// create initial drones
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

//Establish a connection to the database
const MONGO_URI = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/lab-express-drones";
mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Drone.create(drones);
  })
  .then(dronesFromDB=> {
    //Check if the drones collection is successfully,how many drones have been created. 
    console.log('Successfully created drones:' , dronesFromDB.length )
  })
  // .then(()=>{
  //   //close the connection with the database after we have seeded the database
  //   return mongoose.connection.close()
  // })
  // .then(()=>{
  //   console.log('DB connection closed!')
  // })
  // // In case, the seeding of the database fails, catch the error and output it
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });



