const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('./../models/Drone.model')

router.get('/drones', (req, res) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone
    .find()
    .then(drone => res.render('drones/list', { drone }))
    .catch(err => console.log(err))
});


// Iteration #3: Add a new drone
// ... your code here

router.get('/drones/create', (req, res) => {
  res.render('drones/create-form')
})

router.post('/drones/create', (req, res) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

});

router.get('/drones/_id/edit', (req, res) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { _id } = req.params
  Drone
    .findById(_id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))
});

router.post('/drones/_id/edit', (req, res) => {
  // Iteration #4: Update the drone
  // ... your code here  

  const { _id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(_id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

router.post('/drones/:id/delete', (req, res) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { _id } = req.params

  Drone
    .findByIdAndDelete(_id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

});

module.exports = router;
