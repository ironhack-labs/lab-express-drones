const express = require('express');
const { Drone } = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((data) => {
      // console.log('This data', data);
      res.render('drones/list', { drones: data });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});
// .catch((err) => {
//   console.error(err);
// });

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then((data) => {
      res.redirect('/drones');
    })
    .catch((err) => {
      console.log(err);
      res.render('drones/create-form', { errorCode: 1 });
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((data) => {
      // console.log(data);
      res.render('drones/update-form', data);
    })
    .catch((err) => {
      console.log(err);
      res.redirect('drones/update-form');
      // App crashes here if there is a duplicate key error
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.redirect('/drones');
  });
  // console.log(req.params.id);
  // console.log('BODY', req.body);
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
