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
    .then(() => {
      console.log('Drone saved');
      res.redirect('/drones', { saved: 1 });
    })
    .catch((err) => {
      res.render('drones/create-form', { errorCode: err.code });
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
