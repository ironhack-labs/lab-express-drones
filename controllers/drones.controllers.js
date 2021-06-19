const Drone = require("../models/Drone.model");

module.exports.listDrones = ((req, res, next) => {
    Drone.find()
    .then((drones) => {
        res.render("drones/list", {droneList: drones})
    })
    .catch((e) => {
        console.log(e)
    })
})

module.exports.createDrone = ((req, res, next) => {
    res.render("drones/create-form")
})

module.exports.doCreateDrone = ((req, res, next) => {
    const createdDrone = req.body
    Drone.create(createdDrone)
    .then((drone) => {
        console.log("Drone created: ", drone)
        res.redirect("/drones")
    })
    .catch ((e) => {
        console.log(e)
        res.redirect("drones/create-form")
    })
})

module.exports.updateDrone = ( (req, res, next) => {
    Drone.findById(req.params.id)
    .then ((drone) => {
        console.log(drone)
        res.render("drones/update-form", drone)
    })
    .catch((e) => {
        console.log(e)
    })
})

module.exports.doUpdateDrone = ((req, res, next) => {
    const { id } = req.params; 
    Drone.findByIdAndUpdate(id, req.body)
    .then(() => {
        res.redirect("/drones")
    })
    .catch((e) => {
        console.log(e)
    })
})

module.exports.doDeleteDrone = ((req, res, next) => {
    Drone.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/drones")
    })
})