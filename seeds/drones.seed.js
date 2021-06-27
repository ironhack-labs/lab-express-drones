const seed = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const mongoose = require("mongoose");
const DroneModel = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

  //immediately involked function expression - wrap it all in an async. Keep it simple!
(async function() {
   try {
       
    let connectResponse =  await mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,})
    console.log(`Connected to Mongo! Database name: "${connectResponse.connections[0].name}"`);

    let seedResponse = await DroneModel.create(seed)
    console.log(seedResponse.length)
    console.log(`Database successfully seeded! ${seed.length} entries added`)
    mongoose.connection.close()
    

   } 
   catch (err) {
    console.error("Error connecting to mongo: ", err);
   }
})();