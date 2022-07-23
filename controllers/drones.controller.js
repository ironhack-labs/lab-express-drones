//importar modelo
const Drone = require("../models/Drone.model");

//read - find all drones
module.exports.drones = (req, res, next) => {
  Drone.find().then((drones) => {
    res.render("drones/list", { drones });
  });
};

//create a new drone
module.exports.createDrone = (req, res, next) => {
  res.render("drones/create-form");
};

module.exports.doCreate = (req, res, next) => {
  Drone.create(req.body)
    .then((createdDrone) => {
      res.redirect("/drones");
    })
    .catch(next);
};

//edit a drone
module.exports.editDrone = (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndUpdate(id)
    .then((updatedDrone) => {
      res.render("drones/create-form", { updatedDrone, isEdit: true });
    })
    .catch(next);
};

module.exports.doEdit = (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedDrone) => {
      res.redirect("/drones");
    })
    .catch(next);
};

//delete a drone
module.exports.delete = (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then((deletedDrone) => {
      res.redirect("/drones");
    })
    .catch(next);
};
