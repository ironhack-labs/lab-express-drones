const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model')

const router = express.Router();


//Mostrar toda a lista dos drones
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((drones) => {
    res.render("drones/list", {drones});
  })
  .catch((err) => {
    res.render('error', {err});
  })
});
  


//Criar novo drone

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
let {name, propellers, maxSpeed} = req.body
Drone.create({
  name,
  propellers,
  maxSpeed
}).then(() => {
  res.redirect('/drones');
})
.catch((err) => {
  res.render('/drones/create', {err});
  })
});




//uptade novo drone


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let droneId = req.params.id;
  Drone.findById(droneId)
    .then((droneFound) => {
      res.render("drones/update-form", {drones: droneFound});
    })
    .catch((err) => {
      res.render('error', {err});
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let droneId = req.params.id;
  let {name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(droneId, {
    name,
    propellers,
    maxSpeed
  }).then (() => {
    res.redirect('/drones');
  })
  .catch((err) => {
    res.render('error', {err});
    })
  });






//DELETE 


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  let droneId = req.params.id;
  Drone.findByIdAndDelete(droneId)
  .then(() => res.redirect('/drones'))
});

module.exports = router;
