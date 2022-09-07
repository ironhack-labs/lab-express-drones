const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then(drons =>{
    console.log(drons)
    res.render("drones/list", { drons: drons })
  })
  .catch(err =>{console.log(err)})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
  .then(dron =>{
    console.log(dron);
    res.redirect("/drones")

  })
  .catch(err =>{console.log(err)})
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then(drone =>{
    console.log(drone);
    res.render("drones/update-form", drone)
  }
    
  )
  .catch(err =>{console.log(err)})
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
    Drone.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(newActualization =>{
      console.log(newActualization)
      res.redirect(`/drones`)
    })
    .catch(err =>{console.log(err)})

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
