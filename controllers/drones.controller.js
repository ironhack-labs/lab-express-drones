const Drone = require("../models/Drone.model");

module.exports.list = (req, res, next) => {
  Drone.find()
    .then((drones) => {
      res.render("drones/list.hbs", { drones });
    })
    .catch((err) => console.err(err));
};


module.exports.newDrone = (req, res, next) => {
      res.render("drones/create-form");
};

module.exports.createDrone = (req, res, next) => {
    Drone.create(req.body)
      .then(() => {
        res.redirect('/drones')
      })
      .catch(err => console.err(err))
  }

  module.exports.editDrone = (req, res, next) => {
    Drone.findById(req.params.id)
    .then((drone) => {
        res.render("drones/update-form", {drone})
    })
    .catch(() => res.redirect('/drones'))
  }

  module.exports.editedDrone = (req, res, next) => {
    Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(()=> {
        res.redirect('/drones')
    })
    .catch(err => console.err(err))
  }

  module.exports.delete = (req, res, next) => {
    Drone.findByIdAndDelete (req.params.id)
    .then((drone) => {
        res.redirect("/drones")
    })
    .catch()
  }
