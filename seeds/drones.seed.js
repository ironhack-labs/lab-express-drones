// Iteration #1
// 1. IMPORTACIONES
const mongoose 		= require("mongoose")
const Drone			= require("./../models/Drone.model")

require("dotenv").config()

// 2. CONEXIÓN A BD
mongoose.connect("mongodb+srv://CheloCr:Alexandra1804@cluster0.4wfw6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})


// 3. LOS DATOS QUE QUEREMOS POBLAR
const drones = [
    {
    image:"/images/dron1.png",
    name: "Creeper XL 500", 
    propellers: 3, 
    maxSpeed: 12 
    },
    {
    image:"/images/dron2.jpg",
    name: "Racer 57", 
    propellers: 4, 
    maxSpeed: 20 
    },
    {
    image:"/images/dron3.jpg",
    name: "Courier 3000i", 
    propellers: 6, 
    maxSpeed: 18 
    }
  ];


// 4. POBLAR LA BASE DE DATOS

const createDroneDB = async () => {

	const newDrone = await Drone.create(drones)

	mongoose.connection.close()

    

}

createDroneDB()