const Drone = require("../models/Drone.model");


module.exports.index = (req, res, next) => {
    res.render("index");
};


// ALL DRONES

module.exports.listDrones = (req, res, next) => {
    Drone.find()
    .then((drones) => {
        res.render("drones/list.hbs", { drones: drones })
    })
    .catch(e => console.error(e))
};


// EACH DRONE

module.exports.DroneId = (req, res, next) => {
    Drone.findById(req.params)
    .then((drone) => {
        res.render("drones/drone-id.hbs", { drone })
    })
    .catch(e => console.error(e))
};


// CREATE DRONE

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


// REVISAR!

// UPDATE DRONE

module.exports.updateDrone = (req, res, next) => {
    Drones.findById(req.params.id)
    .then((drone) => {
        res.render("drones/update-form", drone)
    })
    .catch(e => console.error(e))
};

module.exports.doUpdateDrone = (req, res, next) => {
    Drone.findByIdAndUpdate(req.params, req.body)
    .then(() => {
        res.redirect("/drones")
    })
    .catch((e) => console.log(e))
};

// DELETE DRONE

module.exports.deleteDrone = (req, res, next) => {
    Drone.findByIdAndDelete()(req.params.id)
      .then(() => res.redirect("/drones"))
      .catch((e) => console.error(e));
  };