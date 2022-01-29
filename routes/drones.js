const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
 
  Drone.find()
  .then((result) => {
    console.log(result);
    res.render('drones/list', { drones: result })
})
  .catch((err) => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    const {name, propellers, maxSpeed} = req.body;
    Drone.create(req.body)
      .then(drone => {
        console.log('new drone', drone);
        res.redirect(`/drones/${drone._id}`);
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  });

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((result) => {
      res.render('drones/update-form', result)
  })
    .catch((err) => console.log(err)) 
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findOneAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect('/drones');
  })
  .catch((err) => console.log(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/drones');
  })
  .catch((err) => console.log(err))
});

module.exports = router;
