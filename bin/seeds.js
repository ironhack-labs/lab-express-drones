// .bin/seeds.js

// 1 Importaciones

const mongoose        = require('mongoose')
const Dron            = require('./../models/Drone.model')

require("dotenv").config()


// 2 Conexion a DB
mongoose.connect("mongodb+srv://George87lr:870518jlrg@cluster0.a4ljm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})


// 3 Los Datos que queremos poblar
const drones = [
    { 
    name: "Creeper XL 500", 
    propellers: 3, 
    maxSpeed: 12,
    image:'/images/Dron.jpg'
     
    },
    { 
    name: "Racer 57", 
    propellers: 4, 
    maxSpeed: 20,
    image:'/images/Dron4.jpg' 
    },
    { 
    name: "Courier 3000i", 
    propellers: 6, 
    maxSpeed: 18,
    image:'/images/Dron6.jpg'
    }
  ];

// 4 Poblar la DB
const creatDronesDB = async () => {
    const newDrones = await Dron.create(drones)

    console.log(newDrones)

    mongoose.connection.close()
}

creatDronesDB()

