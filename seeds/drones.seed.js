// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  'mongodb+srv://pilauria:CtbSHUys2yPQlyxW@cluster0.q3aua.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-12yrdj-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';

mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo: ', err);
  });

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
];

Drone.create(drones)
  .then(dronesDB => {
    console.log(`${dronesDB.length} have been created`);
    // close DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`Error while creating drones from the DB: ${err}`));

// Async/Await version//
// Iteration #1
// const mongoose = require('mongoose');

// const Drone = require('../models/Drone.model');

// const MONGO_URI = 'mongodb://localhost/lab-express-drones';

// const fillDrone = async () => {
//   try {
//     await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     });
//     await Drone.deleteMany();
//     const newDrones = [
//       { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
//       { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
//       { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
//     ];
//     await Drone.create(newDrones);
//     console.log(`Inserted ${newDrones.length} drones`);
//   } catch (error) {
//     return error;
//   }

//   console.log('Disconnecting from the database...');
//   mongoose.disconnect();
// };

// fillDrone();
