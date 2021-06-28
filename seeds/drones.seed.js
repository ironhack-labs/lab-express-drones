// Iteration #1
// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });





const dronesCollection = [
    {
        name: 'General Atomics MQ - 9 Reaper',
        propellers: 4,
        maxSpeed: 18,
    },
    {
        name: 'General WForce',
        propellers: 6,
        maxSpeed: 15,
    }, 
    {
        name: 'General XXRay',
        propellers: 8,
        maxSpeed: 4,
    }

];


Drone.create(dronesCollection)
    .then((dronesFromDB) => {
        console.log(`Created ${dronesFromDB.length} drones`);
        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch((err) =>
        console.log(`An error occurred while creating books from the DB: ${err}`)
    );
