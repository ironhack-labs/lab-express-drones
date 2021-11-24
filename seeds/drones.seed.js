// Iteration #1
//Importaciones
const mongoose = require("mongoose")
const Drone = require("./../models/Drone.model")

//Conexión a BD
mongoose.connect("mongodb+srv://rodrigosamaniego:pikachu33@cluster0.axprv.mongodb.net/dronesDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Datos
const drones = [{
    name: "Cat Drone",
    propellers: 4,
    maxSpeed: 20,
    image:
    "https://metro.co.uk/wp-content/uploads/2015/10/ad_183137135-e1443711448326.jpg"
},
{
    name: "Volador de Papántla",
    propellers: 6,
    maxSpeed: 35,
    image:
    "https://images-na.ssl-images-amazon.com/images/I/41fB2PspoYL.jpg"
},
{
    name: "Pajarito",
    propellers: 8,
    maxSpeed: 45,
    image:
    "https://t3k2p9e7.rocketcdn.me/wp-content/uploads/2019/07/intel-falcon-8-plus_web.jpg"
}]

//Poblar la BD

const createDrones = async () => {
    const newDrones = await Drone.create(drones)
    
    console.log(newDrones)
    
    mongoose.connection.close()
}

createDrones();
