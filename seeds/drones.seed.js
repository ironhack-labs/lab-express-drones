// Iteration #1
const mongoose		= require("mongoose")
const Drone 			= require("../models/Drone.model")
const connectDB		= require("../db/index")

require("dotenv").config()

connectDB()


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12, image: "https://icdn.dtcn.com/image/digitaltrends_es/drone_mule_02-970x647.jpg" },
    { name: "Racer 57", propellers: 4, maxSpeed: 20, image: "https://www.dpreview.com/files/p/articles/4631470932/Product-images/DJI_FPV_drone.jpeg" },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18, image: "https://www.researchgate.net/profile/Gohram-Baloch-2/publication/319162186/figure/fig1/AS:671316311031814@1537065689492/Parcel-delivery-using-Drones.jpg" }
  ];

  const createDrones = async (data) => {
 
    try {
        const createDrones = await Drone.create(data)

        console.log(createDrones)

        // DESCONECTAR LA PETICIÓN A BASE DE DATOS
        return mongoose.connection.close()	

    } catch (error) {
        
        console.log(error)
        process.exit(1)

    }


}

createDrones(drones)