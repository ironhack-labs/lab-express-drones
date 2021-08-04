const express = require('express');
const router = express.Router();

// require the Drone model here
// const DroneModel = require('../models/Drone.model');
const Drone = require('../models/Drone.model')


//GET /drones
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allTheDronesFromDB) => {
      console.log('Retrieved drones from DB:', allTheDronesFromDB)
      res.render('./drones/list', { allDrones: allTheDronesFromDB })
    })
    .catch((err) => {
      console.log('error with finding DroneDB', err)
    });
});


//GET /drones/create
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('rones/create-form',)
});

//POST /drones/create
router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body)
  Drone.create({ title: req.body.title, propellers: req.body.propellers, maxSpeed: req.body.maxSpeed })
  .then(res.redirect('/drones'))
})


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
