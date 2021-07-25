// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model")
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


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


mongoose 
.connect("mongodb://localhost/lab-express-drones")
.then(async ()=> {
    await Drone.deleteMany();

    Drone.create(drones)
    .then((result)=> {
        console.log("A drone has been created !");
    })
    .catch((error)=>{
        console.log(error)
    })
})

