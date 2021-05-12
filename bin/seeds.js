//require mongoose so we can use mongoosey things
const mongoose = require('mongoose');
//require our drone schema
const Drone = require('../models/Drone.model');
//variable containing our db name
const DB_NAME = 'droneDB';

//connecting to the db
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const drones = [
    { 
        name: 'The Professor', 
        image: '/images/professor.png',
        propellers: 3, 
        maxSpeed: 12 
    },
    { 
        name: 'Blossom',
        image: '/images/blossom.png', 
        propellers: 4, 
        maxSpeed: 20 
    },
    { 
        name: 'Buttercup', 
        image: '/images/buttercup.png',
        propellers: 6, 
        maxSpeed: 18 
    },
    { 
        name: 'Bubbles', 
        image: '/images/bubbles.png',
        propellers: 8, 
        maxSpeed: 38 
    }
];

Drone.create(drones)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);
    mongoose.disconnect();
  })
  .catch(e => console.log(`An error occurred while creating drones from the DB: ${e}`));
