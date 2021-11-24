// Iteration #1

// 1. IMPORTACIONES
const mongoose 		= require("mongoose")
const Drone			= require("./../models/Drone.model")

require("dotenv").config()

// 2. CONEXIÓN A BD
mongoose.connect("mongodb://martingiuradev:CfSh7re1LUAfynDk@cluster0-shard-00-00.pk3s0.mongodb.net:27017,cluster0-shard-00-01.pk3s0.mongodb.net:27017,cluster0-shard-00-02.pk3s0.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11wtdf-shard-0&authSource=admin&retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12, image: "https://m.media-amazon.com/images/I/61H6sByGqbL._AC_SY355_.jpg" },
    { name: "Racer 57", propellers: 4, maxSpeed: 20, image: "https://signal.avg.com/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/The%20Ups%20and%20Downs%20of%20Drones/The_Ups_and_Downs_of_Drones-Hero.jpg" },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18, image: "https://http2.mlstatic.com/D_NQ_NP_648102-MLA32625947409_102019-O.jpg" }
  ];

  // 4. POBLAR LA BASE DE DATOS

const createDronesDB = async () => {

	const newDrones = await Drone.create(drones)

	console.log(newDrones)

	mongoose.connection.close()

}

createDronesDB()