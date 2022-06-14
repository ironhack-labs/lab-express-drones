// Iteration #1
const mongoose = require("mongoose")
const Drone = require("../models/Drone.model.js")

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
})
    .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

  const drones = [
    {
    name: 'cherepaha',
    propellers: 4,
    maxSpeed: 6
    },
    {
        name: 'kuznechik',
        propellers: 2,
        maxSpeed: 7
        },
        {
            name: 'lastochka',
            propellers: 2,
            maxSpeed: 17
            }
]
Drone.create(drones)
    .then(dronesFromDB => {
      console.log(`Created ${dronesFromDB.length} drones`);
      mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));
