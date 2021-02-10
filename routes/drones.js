const express = require('express');
const router  = express.Router();

const Drone   = require('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  Drone.find({})
    .then((allDrones) => {
      res.render('drones/list', {drones: allDrones})
    }).catch(error => {
      console.log('No se pudo')
      next(error)
    })

});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed}   = req.body
  
  Drone.create({
    name, propellers, maxSpeed
  }).then((droneCreated) => {
    res.redirect('/drones')
  })
  .catch(error => {
    res.render('drones/create-form')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params

  Drone.findById(id)
    .then((droneToEdit) => {
      res.render('drones/update-form', {drone: droneToEdit})
    })
    .catch(error => next(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params

  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true})
  .then((droneUpdated) => {
    res.redirect(`/drones/${droneUpdated.id}`)
  })
  .catch(error => next(error))
})


router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error))
});

module.exports = router;
