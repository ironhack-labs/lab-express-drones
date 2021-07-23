const Drone = require('../models/Drone.model');
const mongoose = require('mongoose');

// Iteration #1
const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
];

const MONGO_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/lab-express-drones';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    return Drone.deleteMany();
  })
  .then(() => {
    Drone.create(drones)
      .then((createdDrones) => {
        console.log(createdDrones);
        // mongoose.connection.close(() => {
        //   console.log(`Successfully disconnected DB.`);
        // });
        console.log('I qm here');
        mongoose.disconnect();
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
