const Drone = require('../models/Drone.model');

module.exports.list = (req, res, next) => {
  Drone.find()
    .then((drones) => {
      res.render('drones/list', { drones })
    })
    .catch(err => console.log(err))
}

module.exports.detail = () => {

}

module.exports.create = (req, res, next) => {
  res.render('drones/create-form');
}


module.exports.doCreate = (req, res, next) => {
  Drone.create(req.body)
    .then(drone => {
      res.redirect('/drones')
    })
    .catch(err => console.err(err))
  }

  module.exports.update = (req, res, next) => {
    Drone.findById(req.params.id)
      .then(drone => {
        if (drone) {
          res.render('drones/update-form', { drone })
        } else {
          res.redirect('/drones')
        }
      })
      .catch(() => res.redirect('/drones'))
  }

  module.exports.doUpdate = (req, res, next) => {
    Drone.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect('/drones')
      })
      .catch(err => console.err(err))
  }
  
  module.exports.delete = (req, res, next) => {
    Drone.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect('/drones')
      })
      .catch(err => {
        console.log(err)
        res.redirect('/drones')
      })
  }