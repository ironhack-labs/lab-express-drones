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

module.exports.edit = (req, res, next) => {
  console.log(req.params)
  Drone.findById(req.params.id)
    .then(drone => {
      res.render("drones/update-form", { drone })
    })
    .catch(err => console.log(err))
}

module.exports.doEdit = (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect("/drones")
    })
}