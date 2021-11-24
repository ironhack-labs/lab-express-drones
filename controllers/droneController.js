
const Drone = require("./../models/Drone.model")

exports.getAllDrones = async (req, res) => {
    const allDrones = await Drone.find ({})
    
    res.render("drones/list", {
        data: allDrones
    })
}

exports.viewCreateDrone = async (req, res) => {
    res.render("drones/create")
}

exports.createDrone = async (req, res) => {
    const name = req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed
    const image = req.body.image

    const newDroneCreated = await Drone.create({name, proppelers, maxSpeed, image})

    res.redirect("/drones")


}

exports.viewEditDrone = async (req, res) => {
    const droneID = req.params.droneID
    
    const foundDrone = await Drone.findById(droneID)
    res.render("drones/edit", {
        data: foundDrone
    })
}

exports.editDrone = async (req, res) => {
    const droneID = req.params.bookID

    const name = req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed
    const image = req.body.image

    const updatedDrone = await Drone.findByIdAndUpdate(
        droneID,
        {name, propellers, maxSpeed, image},
        {new: true}
    )

    res.redirect(`/drones/${updatedDrone._id}`)

}

exports.deleteDrone = async (req, res) => {
    const droneID = req.res.params.droneID

    const deletedDrone = await Drone.findOneAndDelete(droneID)

    res.redirect("/drones")
}