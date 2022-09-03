const express = require('express');
const router = express.Router();

// require the Drone model here
const droneModel = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  droneModel.find()
    .then((drones) => {
      console.log('ALL THE DRONES -------->', drones)
      res.render('drones/list', { drones });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  res.render('drones/create-form');

});



router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body
  droneModel.create({ name, propellers, maxSpeed })
    .then((drones) => {
      res.redirect(`/drones`);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  droneModel.findById(req.params.id)
    .then((droneId) => {
      console.log('ESTOYYYYYY AQUIIIIIII', droneId)
      res.render('drones/update-form', droneId);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body
  droneModel.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
    .then((droneId) => {
      res.redirect(`/drones`);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  droneModel.findByIdAndDelete(req.params.id)
    .then((drone) => {
      res.redirect(`/drones`);
    })
    .catch((err) => {
      next(err);
    });

});

module.exports = router;
