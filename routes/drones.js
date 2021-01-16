const express = require('express');

const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
    Drone.find()
    .then((dronesFromDB) => {
      // console.log(allDronesFromDB))
      res.render('drones/list.hbs', { dronesFromDB })})
    .catch((err) => console.log(`There was an error retrieving all the drones: ${err}`));
});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create(req.body)
  .then((currentDrone) => {
    res.redirect('/drones');
  })
  .catch((err) => console.log(`There was an error saving the Drone: ${err}`));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // // Iteration #4: Update the drone
  // Drone.findById(req.params.id)
  // .then((foundDrone) => { console.log (foundDrone)

  const { id } = req.params;

  Drone.findById(id)
  
  .then( droneToUpdate => {
    res.render('drones/update-form', { droneToUpdate} )})
  .catch((err) => console.log(`There was an error updating the Drone: ${err}`));
  });


router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
  .then(() => res.redirect('/drones'))
  .catch((err) => console.log(`There was an error updating the Drone: ${err}`))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params
  Drone.findByIdAndRemove(id)
  .then(()=> res.redirect('/drones'))
  .catch(err=> console.log(`Unable to delete this drone: : ${err}`))
});	

module.exports = router;
