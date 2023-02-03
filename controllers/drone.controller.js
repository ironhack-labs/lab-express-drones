const Drone = require('../models/drone.model')

module.exports.list = ((req, res, next) => {
  Drone.find()
    .then((drones) => {
      res.render('drones/list', { drones })
    })
    .catch((error) => console.error('An error occurred trying to list drones', error))
})

module.exports.create = ((req, res, next) => {
  res.render('drones/new')
})

module.exports.doCreate = ((req, res, next) => {
  Drone.create({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
    image: req.body.image
  })
    .then((drone) => {
      res.redirect('/drones')
    })
    .catch((error) => console.error('An error occurred trying to create drones', error))
})
module.exports.update = ((req, res, next) => {
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render('drones/edit', { drone })
    })
    .catch((error) => console.error('An error occurred trying to edit drones', error))
})
module.exports.doUpdate = ((req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
    image: req.body.image
  })
    .then((drone) => {
      res.redirect('/drones')
    })
    .catch((error) => console.error('An error occurred trying to update drones', error))
})
module.exports.delete = ((req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
    .then((drone) => {
      res.redirect('/drones')
    })
    .catch((error) => console.error('An error occurred trying to delete drones', error))
})