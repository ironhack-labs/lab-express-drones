const express = require('express');
const Drone = require('../models/Drone.model')
// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  //Iteration #2
  Drone.find({})
    .then((drone)=>{
      res.render('drones/list', {drone: drone})
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed} = req.body

  Drone.create({name, propellers, maxSpeed})
    .then(droneFromDB => console.log(`New drone created: ${droneFromDB.name}.`))
    .then(() => res.redirect("/drones"))
    .catch((e) => next(e));

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
