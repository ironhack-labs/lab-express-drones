const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

require("../db");

// iteration 1

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },   
]; 
// conecto a la db
mongoose.connection.once("open", ()=> {
    console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);

mongoose.connection.db
.dropDatabase() // limpio la DB
.then(()=>{
    console.info("DB has been cleared")
    return Drone.create(drones) // me devuelve un drone creado en base al modelo de Drone
})
.then(createdDrones => {
    createdDrones.forEach(drone =>{
        console.log(`Drone with name ${drone.name} has been created`)
    })
    console.log(`a total of ${drones.length} has been created`)
})
.catch(err => console.error(err))
.finally(()=>{
    mongoose.connection.close(function (){
        console.log("mongoose disconnected");
        process.exit(0);
    });
})
})

