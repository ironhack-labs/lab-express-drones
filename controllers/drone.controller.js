const Drone = require("../models/Drone.model");

module.exports.home = (req, res, next) => {
  res.render("index", {});
};

module.exports.showDrones = (req, res, next) => {
  Drone.find()
    .then((drones) => {
      res.render("drones/list.hbs", { drones: drones });
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
    .catch((e) => res.redirect("/drones/create-form.hbs"));
};
