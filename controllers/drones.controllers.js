const Drone = require("../models/Drone.model");


module.exports.index = (req, res, next) => {
    res.render("index");
};

module.exports.listDrones = (req, res, next) => {
    Drone.find()
    .then((drones) => {
        res.render("drones/list.hbs", { drones: drones })
    })
    .catch(e => console.error(e))
};

module.exports.createDrone = (req, res, next) => {
    res.render("drones/create-form.hbs")
};

module.exports.doCreateDrone = (req, res, next) => {
    Drone.create(req.body)
    .then(() => {
        res.redirect("/drones")
    })
    .catch((e) => res.render("drones/create-form.hbs"))
};


// REVISAR

module.exports.updateDrone = (req, res, next) => {
    Drones.findById(req.params.id)
    .then((drone) => res.render("update-form", drone))
    .catch(e => console.error(e))
};

module.exports.doUpdateDrone = (req, res, next) => {
    Drone.findByIdAndUpdate(id, req.body)
    .then(() => {
        res.redirect("/drones")
    })
    .catch((e) => res.render("drones/create-form.hbs"))
};

module.exports.deleteDrone = (req, res, next) => {
    Drone.deleteById(req.params.id)
      .then(() => res.redirect("/drones"))
      .catch((e) => console.error(e));
  };