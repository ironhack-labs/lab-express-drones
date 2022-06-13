const router = require('express').Router();
const Drone = require('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(allTheDrones => {
      res.render('../views/drones/list',{drones: allTheDrones})
    })
    .catch(error => {
      console.log(`Error while getting the drones --> ${error}`)
      next()
    })
})

router.get('/drones/create', (req, res, next) => {
  res.render('../views/drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed})
    .then(() => res.redirect('/drones'))
    .catch(error => {
      console.log(`Error while trying to create a drone `, error)
      next()
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params
  Drone.findById(id)
    .then(droneToEdit => {
      res.render('../views/drones/update-form', {drone: droneToEdit})
    })
    .catch(error => {
      console.log(`Error --->`,error)
      next()
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed},{new:true})
  .then(() => res.redirect(`/drones`))
  .catch(error => {
    console.log(`Error --->`,error)
    next()
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params
  Drone.findByIdAndDelete(id)
  
    .then(() => res.redirect('/drones'))
    .catch(error => {
      console.log(`Error ---> ${error}`)
      next()
    })
});

module.exports = router;
