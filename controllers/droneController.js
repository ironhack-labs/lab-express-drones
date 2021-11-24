//1. IMPORT
const Drone = require("./../models/Drone.model")

//--------------------VIEW ALL DRONES--------------------
exports.listDrones = async(req,res) =>{

    const listAllDrones = await Drone.find({}) // Busca a todos ({})
    console.log(listAllDrones)
    // carpèta de 👇  views/drone/list
    res.render("drones/list", {
        data: listAllDrones
    })
}

//-------------Iteration #3: Add a new drone-------------
exports.viewCreatedDrone = async (req,res) =>{

    res.render("drones/create-form")

}

exports.createDrone = async (req,res) =>{

    // console.log(req.body) //<--- datos del formulario
    const name = req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed
    const image = req.body.image

    const newDroneCreated = await Drone.create({name, propellers, maxSpeed, image})
    console.log(newDroneCreated)

    console.log("Datos recibidos") // para ver si recibe mis datos

    res.redirect("/drones")
    
}