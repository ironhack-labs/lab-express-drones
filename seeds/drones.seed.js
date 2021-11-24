// Iteration #1
//1. IMPORTACIONES
const mongoose = require("mongoose")
const Drone = require ("./../models/Drone.model")


//2. CONEXIÓN A DB
mongoose.connect("mongodb+srv://abril_ch:KMongo_acr8flk@cluster0.zmbxa.mongodb.net/Ih-Drones-lab?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//3. DATOS A POBLAR
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12, image:"/images/3propeller.jpeg" },
    { name: "Racer 57", propellers: 4, maxSpeed: 20, image: "images/4propeller.jpeg" },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18, image:"/images/6propeller.jpeg" }
];


//4.POBLACIÓN DE BASE DE DATOS
const createDronesDB = async () => {
    const newDrones = await Drone.create(drones)
    console.log(newDrones)
    mongoose.connection.close()
}

createDronesDB()

