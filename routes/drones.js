const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
    .find()
    .then(cacharros => res.render('drones/list', { cacharros }))
    .catch(err => console.log(err))

  // ... your code here
});

router.get('/drones/create', (req, res, next) => {

  res.render('drones/create-form')

});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(res.redirect('/drones'))
    .catch(err => console.log(err))

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  Drone
    .findById(id)
    .then(theDrone => res.render('drones/update-form', theDrone))
    .catch(err => console.log(err))
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body
  console.log(id, name, propellers, maxSpeed)
  Drone
    .findByIdAndUpdate(id,{name,propellers,maxSpeed}, {new:true})
    .then(theDrone => console.log(`Drone ${theDrone.name} actualiced`))
    .then(res.redirect('/drones'))
    
    .catch(err => console.log(err))

  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params
  console.log(`Deleting ${id}`)
  
  Drone
  .findByIdAndDelete(id)
  .then(res.redirect('/drones'))

  // ... your code here
});

module.exports = router;
