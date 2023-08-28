const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((dronesFromDB) => {
    res.render("drones/list", {drones:dronesFromDB});
  })
  .catch(e => next(e))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed:req.body.maxSpeed
  };

  Drone.create(newDrone) 
    .then((newDrone) =>{
      res.redirect("/drones");
    })
    .catch(e => next(e))  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;

  Drone.findById(droneId)
      .then(drone => {
          res.render('drones/update-form.hbs', { drone: droneToEdit }); 
      })
      .catch(e => next(e)); 
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone  
    const { droneId } = req.params;
    const { name, propellers, maxSpeed} = req.body;

    Drone.findByIdAndUpdate(droneId, { name, propellers, maxSpeed })
        .then(() => {res.redirect("/drones")}) 
        .catch(e => next(e)); 
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone 
    const { droneId } = req.params;

    Drone.findByIdAndDelete(droneId)
        .then(() => res.redirect('/drones'))
        .catch(e => next(e));

});

module.exports = router;


