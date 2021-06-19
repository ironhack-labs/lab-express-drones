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