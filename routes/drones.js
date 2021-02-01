const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  Drone.find()
    .then((dronesFromDB) => res.render('drones/list', { dronesFromDB }))
    .catch((e) => next(e))
});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;

  Drone.create(req.body)
  .then((currentDrone) => {
    res.redirect('/drones');
  })
  .catch((err) => console.log(`There was an error saving the Drone: ${err}`));

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then((drone)=> {
    res.render('drones/update-form',drone)
  })
  .catch((e)=> next(e))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} =req.params 
  const { name, propellers, maxSpeed } = req.body

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
  .then(() => res.redirect('/drones'))
  .catch((err) => console.log(`There was an error updating the Drone: ${err}`))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params
  Drone.findByIdAndRemove(id)
  .then(()=> res.redirect('/drones'))
  .catch(err=> console.log(`Unable to delete this drone: : ${err}`))
});	


module.exports = router;
