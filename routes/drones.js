const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(listOfDrones => {
    console.log(listOfDrones);

    res.render('drones/list', {listOfDrones});
  })
  .catch(error => {
    console.log(`Error: we couldn't get the drones from the database: ${error}`);
    next();
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.create(newDrone)
    .then(() => {
      res.redirect("/drones")
    })
    .catch((error) => {
      res.render("drones/create-form",{error})
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then(edit => {
    res.render('drones/update-form', edit);
  })
  .catch(error => {
    console.log('Error while updating a new drone:', error)
    next()
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
   
  Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones')
    })
    .catch(error => {
      console.log(`Error while trying to edit a drone: ${error}`)
      next()
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
