const mongoose = require("mongoose");
const Drones = require("../models/Drone.model");

const droneData = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(async() => {
        await Drones.deleteMany();
        Drones.create(droneData)
            .then((result) => {
                console.log(result);
                mongoose.connection.close().then(() => {
                    console.log("Connection closed");
                });
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });