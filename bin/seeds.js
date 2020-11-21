const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

mongoose
  .connect('mongodb://localhost/express-drones-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));


const drones = [
    {
        name: "Nimbus 3000",
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: "The Golden Snitch",
        propellers: 6,
        maxSpeed: 24

    },
    {
        name: "Expeliarmus",
        propellers: 8,
        maxSpeed: 32
    }
];

Drone.create(drones)
.then(dronesFromDB => {
    console.log(`There are now ${dronesFromDB.length} drones in the DB`);
    mongoose.connection.close();
})
.catch(error => {
    console.log('There has been an error when inserting drones in the database: ', error);
});