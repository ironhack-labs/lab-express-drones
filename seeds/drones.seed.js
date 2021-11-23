// Iteration #1
// 1. IMPORTACIONES
const mongoose          = require("mongoose")
const Drone             = require("./../models/Drone.model")

require("dotenv").config()

//2. CONEXION A BD

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
})

//3. LOS DATOS QUE QUEREMOS POBLAR

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }

];

//4. POBLAR LA BASE DE DATOS
const createDronesDB = async () => {

    const newDrones = await Drone.create(drones)

    console.log(newDrones);

    mongoose.connection.close()


}

createDronesDB()