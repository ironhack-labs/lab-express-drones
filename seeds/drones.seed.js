// Iteration #1



const mongoose = require('mongoose');

const DroneModel = require('../Models/Drone.model');

const MONGO_URI = "mongodb://localhost/lab-express-drones";


const drones =[
    { name: "Dji SR 520", propellers: 5, maxSpeed: 20 },
  { name: "Juanito 57", propellers: 4, maxSpeed: 20 },
  { name: "SeatPanda 3000", propellers: 6, maxSpeed: 18 }
];

    







mongoose
  .connect(MONGO_URI)
  .then((connectMongoose) => {
    console.log('Connect DB: ', connectMongoose.connections[0].name);
    return DroneModel.deleteMany();
  })
  .then(() => {
    return DroneModel.insertMany(drones);
  })

  .catch((err) => {
    console.error('Error:', err);

  })

  .finally(()=>{
   mongoose.disconnect()
  })