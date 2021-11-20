// Iteration #1

//requier Modell
const Drone = require("../models/Drone.model");
//requier mongoose-functions: connection, drop, close
const {
    mongoConnect,
    mongoDrop,
    mongoClose,
} = require("../config/mongoDB.config");
//requier
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

// async seedfunction
async function seedFunction() {
    try {
        //connection
        await mongoConnect();
        // drop old collection
        await mongoDrop();
        // seeding collection
        const dronesInput = await Drone.insertMany(drones);
        console.log(dronesInput);
        // close connection
        await mongoClose();
    } catch (error) {}
}

//call function
seedFunction();
