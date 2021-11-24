// Iteration #1
// 1. IMPORTACIONES
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')
require("dotenv").config()

//2. CONEXION A BD
mongoose.connect(
    'mongodb+srv://Ed-Uco:lenqwjZJmIXQUPOh@cluster0.b9vfj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);


// 3. LOS DATOS QUE QUEREMOS POBLAR
const drones = [
    {
        name: 'Creeper XL 500',
        propellers: 3,
        maxSpeed: 12,
        image: 'https://pyxis.nymag.com/v1/imgs/732/0be/7db514ca7e900540a903c12064dbc89858-17-drones.2x.rhorizontal.w700.jpg',
    },
    {
        name: 'Racer 57',
        propellers: 4,
        maxSpeed: 20,
        image: 'https://m.media-amazon.com/images/I/51TEcohAqHS._AC_SL1500_.jpg',
    },
    {
        name: 'Courier 3000i',
        propellers: 6,
        maxSpeed: 18,
        image: 'https://3hh51e83bipewktf28g5p1pe-wpengine.netdna-ssl.com/wp-content/uploads/2021/10/26910687_web1_M1-SWR-20211021-Skyline-X-Drone-Teaser-1200x800.jpeg',
    },
];

//4. POBLAR LA BASE DE DATOS.
const createDronesDB = async () => {
      const newDrones = await Drone.create(drones)
      console.log(newDrones)
      mongoose.connection.close()
}
createDronesDB();