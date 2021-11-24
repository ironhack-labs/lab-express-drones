// Iteration #1
//1. IMPORT 
const mongoose          =require("mongoose")
const Drone             =require("./../models/Drone.model")

require("dotenv").config()

//2. CONNECT DB
mongoose.connect("mongodb+srv://RodrigoGonVaz:aKApvQGtNbaGxh0V@cluster0.x4dey.mongodb.net/test?authSource=admin&replicaSet=atlas-7g1ybp-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",{
    useNewUrlParser: true,   // FORMATO NUENO DE MONGODB
    useUnifiedTopology: true
})
.then((x) => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
})
.catch((err) => {
  console.error("Error connecting to mongo: ", err);
});



//3. DATA PARA POBLAR:
const drones = [
{ 
    name: "DJI Mavic 3", 
    propellers: 3, 
    maxSpeed: 12,
    image: "/images/DJIMavic3.png"
},
{ 
    name: "DJI Mavic Air 2", 
    propellers: 4, 
    maxSpeed: 20,
    image: "/images/DJIMavicAir2.jpeg" 
},
{ 
    name: "DJI Mini 2", 
    propellers: 6, 
    maxSpeed: 18,
    image: "/images/DJIMini2.jpeg" 
}
  ];


  //4. POBLAR:
  const createDronesDB = async() => {

        const newDrones = await Drone.create(drones)
        console.log(newDrones)

        mongoose.connection.close()
  }

  createDronesDB()