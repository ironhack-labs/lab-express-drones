// Iteration #1
//importaciones
const mongoose = require("mongoose")
const Drone = require("./../models/Drone.model")

require("dotenv").config()


//conexion a base de datos
mongoose.connect("mongodb+srv://MiguelGarcia:viPUOwhgoXvm2D3b@cluster0.1dm2e.mongodb.net/Dronedatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//datos que queremos poblar

const drones = [{
        name: "Creeper XL 500",
        propellers: 3,
        maxSpeed: 12,
        imagen: "https://es.wikipedia.org/wiki/Veh%C3%ADculo_a%C3%A9reo_no_tripulado#/media/Archivo:Autumn_Drone_(cropped).jpg"
    },
    {
        name: "Racer 57",
        propellers: 4,
        maxSpeed: 20,
        imagen: "https://f.hubspotusercontent40.net/hubfs/4650993/Blog_Content/Avg/Signal/AVG%20Signal%20Images/The%20Ups%20and%20Downs%20of%20Drones/The_Ups_and_Downs_of_Drones-Thumb.jpg"
    },
    {
        name: "Courier 3000i",
        propellers: 6,
        maxSpeed: 18,
        imagen: "https://f.hubspotusercontent40.net/hubfs/4650993/Blog_Content/Avg/Signal/AVG%20Signal%20Images/The%20Ups%20and%20Downs%20of%20Drones/The_Ups_and_Downs_of_Drones-Thumb.jpg"
    }
];


//poblar la base de datos

const createDronesDB = async() => {

    const newDrones = await Drone.create(drones)

    console.log(newDrones)

    mongoose.connection.close()

}

createDronesDB()