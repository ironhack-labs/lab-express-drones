// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

//Create an array of 3 objects, each with name, propellers and maxSpeed as our initial drones.
const drones = [
    { 
        name: "Creeper XL 500", 
        propellers: 3, 
        maxSpeed:12 
    },
    { 
        name: "Racer 57", 
        propellers: 4, 
        maxSpeed:20 
    },
    {   
        name: "Courier 3000i", 
        propellers: 6,
        maxSpeed: 18
    }
];

//Establish a connection to the database. You can use the same code in db/index.js.
require("../db/index");

//Once the database connection is established, call the Drone model's .create() method with the array as an argument.
mongoose.connection.once("open", () => {
    mongoose.connection.db
    .dropDatabase()
    .then(() => {
        return Drone.create(drones);
    })
    .then((createdDrones) => {
        createdDrones.forEach((drone) => 
        //If the .create() method successfully creates the drones collection, output (using console.log()) how many drones have been created. In case, the seeding of the database fails, catch the error and output it.
        console.log(`${drone.name} was created`)
        );
    //close the connection with the database after you have seeded the database. You are familiar with .disconnect() Mongoose method. Click here to search through Mongoose docs.
        return mongoose.connection.close();
    })
    .then(() =>  {
        console.log("Connection closed");
        process.exit(1);
    })
    .catch((err) => {
        console.log(err);
        process.exit(0);
    });
});
