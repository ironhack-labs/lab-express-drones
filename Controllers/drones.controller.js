const Drone = require("../models/Drone.model");

module.exports.home = (req, res, next) => {
  res.render("index");
};

module.exports.listDrones = (req, res, next) => {
  Drone.find()
    .then((drones) => {
      res.render("drones/list.hbs", { drones });
    })
    .catch((e) => console.error(e));
};

module.exports.createDrone = (req, res, next) => {
  res.render("drones/create-form.hbs");
};

module.exports.doCreateDrone = (req, res, next) => {
  Drone.create(req.body)
    .then((drone) => {
      res.redirect("/drones");
    })
    .catch((e) => res.render("drones/create-form.hbs"));
};

module.exports.editDrone = (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => res.render(`drones/create-form.hbs`, { drone }))
    .catch((e) => console.error(e));
};

module.exports.doEditDrone = (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then((drone) => res.redirect(`/drones`))
    .catch((e) => console.error(e));
};

module.exports.deleteDrone = (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
    .then(() => res.redirect(`/drones`))
    .catch((e) => console.error(e));
};

module.exports.id = (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => {
      console.log(drone);
      res.render("drones/id.hbs", { drone });
    })
    .catch((e) => console.error(e));
};
