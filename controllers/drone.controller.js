const Drone = require("../models/Drone.model")

module.exports.list = (req, res, next) => {
  Drone.find()
    .then(drones => {
      res.render("drones/list", { drones })
    })
    .catch(next)
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

module.exports.edit = (req, res, next) => {
  Drone.findById(req.params.id)
    .then(drone => {
      res.render("drones/update-form", { drone })
    })
    .catch(next)
}

module.exports.doEdit = (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect("/drones")
    })
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/drones")
    })
    .catch(next)
}