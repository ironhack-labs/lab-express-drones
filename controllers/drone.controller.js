const Drone = require("../models/Drone.model")

module.exports.list = (req, res, next) => {
  Drone.find()
    .then(drones => {
      res.render("drones/list", { drones })
    })
}

module.exports.create = (req, res, next) => {
  res.render("drones/create-form")
}

module.exports.doCreate = (req, res, next) => {
  Drone.create(req.body)
    .then(() => {
      res.redirect("/drones")
    })
    .catch(next)
}