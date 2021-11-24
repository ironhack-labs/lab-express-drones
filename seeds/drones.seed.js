// Iteration #1

// 1. IMPORTACIONES. Mongoose: embajador para llevar los dats a la base de datos
const mongoose = require("mongoose")
const Drone = require("./../models/Drone.model")

// 2. CONEXIÓN A BD
mongoose.connect("mongodb+srv://pablovicho:Zx55O5SjcSoVdVQL@cluster0.vhj5j.mongodb.net/drones", {
    useNewUrlParser: true,
	useUnifiedTopology: true
})

// 3.  ESTABLECER DATOS A POBLAR
const drones = [
    { name: "Avispa 500", propellers: 3, maxSpeed: 12 },
    { name: "Abejorro Racer", propellers: 4, maxSpeed: 20 },
    { name: "Abejita 3000i", propellers: 6, maxSpeed: 18 }
  ];

  
// 4. POBLAR LA BASE DE DATOS
const createDronesDB = async () => {
    const newDrones = await Drone.create(drones)
    console.log(newDrones)
    mongoose.connection.close()
}

createDronesDB()