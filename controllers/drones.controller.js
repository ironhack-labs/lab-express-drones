const Drone = require("..//models/Drone.model");

module.exports.list = (req, res, next) => {
    Drone.find()
        .then(drones => {
            res.render('drones/list', { drones })
        })
        .catch(error => console.log(error))
}

module.exports.create = (req, res, next) => {
    res.render("drones/create-form")
}

module.exports.doCreate = (req, res, next) => {
    Drone.create(req.body)
        .then((drone) => res.redirect('/drones'))
        .catch((e) => next(e));
}

module.exports.edit = (req, res, next) => {
    Drone.findById(req.params.id)
        .then((drone) => { res.render("drones/create-form", drone) })
        .catch((e) => next(e));
}

module.exports.doEdit = (req, res, next) => {
    Drone.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.redirect('/drones'))
    .catch((e) => next(e));
}

module.exports.delete = (req, res, next) => {
    Drone.findById(req.params.id)
    .then((p) => res.render("drones/list", { ...p.toJSON(), delete: true }))
    .catch((e) => next(e));
  };
  
  module.exports.doDelete = (req, res, next) => {
      Drone.findByIdAndDelete(req.params.id)
      .then(() => res.redirect('/drones'))
        .catch((e) => next(e));
  };