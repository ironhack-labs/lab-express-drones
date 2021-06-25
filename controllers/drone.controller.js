const Drone = require("../models/Drone.model")

module.exports.home = (req, res, next) => {
    res.render("index", {})
}

module.exports.showDrones = (req, res, next) => {
    Drone.find()
    .then((drones) => {
        res.render("drones/list.hbs", {drones : drones })
    })
    .catch(e => console.error(e))
}