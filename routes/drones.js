const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((results) => {
    console.log('These are the results', results);
    res.render('drones/list', {
      drones: results
    });
  })
  .catch((err) => {
    console.log('Something went wrong', err);
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
  .then((results) => {
    console.log('These are the results', results);
    res.redirect('/drones');
  })
  .catch((err) => {
    console.log('Something went wrong', err);
    res.render('drones/create-form', {error: 'Something went wrong'});
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  // console.log('this is showing')
  Drone.findById(req.params.id)
  .then((results) => {
    console.log('These are the results', results);
    res.render('drones/update-form', {drone: results})
  })
  .catch((err) => {
    console.log('Error:', err);
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findByIdAndUpdate(req.params.id, req.body)
  .then((results) => {
    console.log('These are the results', results);
    res.redirect('/drones');
  })
  .catch((err) => {
    console.log('Error:', err);
    res.render('drones/update-form', {error: 'Something went wrong'})
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id)
  .then((results) => {
    console.log('These are the results', results);
    res.redirect('/drones');
  })
  .catch((err) => {
    console.log('Error:', err)
  })
});

module.exports = router;
