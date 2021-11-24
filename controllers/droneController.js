const Drone = require("./../models/Drone.model")


exports.getAllDrones = async(req, res) => {

    const allDrones = await Drone.find({})

    console.log(allDrones)

    res.render("drones/list", {
        data: allDrones
    })
}

exports.viewCreateDrone = async(req, res) => {

    res.render("drones/create")

}

exports.createDrone = async(req, res) => {

    console.log(req.body)

    const name = req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed
    const imagen = req.body.imagen

    const newDroneCreated = await Drone.create({ name, propellers, maxSpeed, imagen })

    console.log(newDroneCreated)

    res.redirect("/drones")

    console.log("Datos recibidos")

}