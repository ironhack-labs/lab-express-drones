const Drone = require('../models/Drone.model')

module.exports.list = (req, res, next) => {
  Drone.find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(err => console.error(err))
}

module.exports.create = (req, res, next) => {
  res.render('drones/create-form')
}

module.exports.doCreate = (req, res, next) => {
  Drone.create(req.body)
    .then(createdDrone => {
      console.log(createdDrone);
      res.redirect('/drones')
    })
    .catch(err => {
      console.error('Error mal asunto', err)
      res.redirect('/drones/create')
    })
}

module.exports.edit = (req, res, next) => {
  const { id } = req.params
  
  Drone.findById(id)
    .then(drone => {
      res.render('drones/update-form', { drone })
    })
    .catch(err => {
      console.error('Error mal asunto', err)
      res.redirect('/drones')
    })
}

module.exports.doEdit = (req, res, next) => {
  const { id } = req.params
  
  Drone.findByIdAndUpdate(id, req.body, { new: true })
    .then(drone => {
      console.log(drone);
      res.redirect('/drones')
    })
    .catch(err => {
      console.error('Error mal asunto', err)
      res.redirect('/drones')
    })
}

module.exports.delete = (req, res, next) => {
  const {id} = req.params

  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => {
      console.error('Error mal asunto', err)
      res.redirect('/drones')
    })
}
hola