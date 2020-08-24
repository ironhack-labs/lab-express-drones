const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')

mongoose
    .connect("mongodb://localhost/express-drones-dev", {
        useCreateIndex:true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const drones = [
        { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
        { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
        { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
      ];

      Drone.create(drones)
            .then((dronesFromDB) => {
                console.log(`created ${dronesFromDB.length} drones`);
                mongoose.connection.close();
            })
            .catch((err) => console.log(`Error inserting records in the DB: ${err}`));