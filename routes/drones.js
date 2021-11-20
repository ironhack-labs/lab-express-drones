const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');


// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((drones) => {
    console.log(drones);
    res.render("drones/list", { drones });
  })
  .catch((err) => {
    console.log(err);
  });

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render("drones/create-form.hbs");
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
 const drone = req.body;
 const newDrone = await Drone.create(drone);
 console.log("newDrone", newDrone);
 res.redirect("/drones");
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.droneId;
  const drone = await Drone.findById(droneId);
  res.render("drones/update-form.hbs");
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone
  .findByIdAndUpdate(
    droneId,
    { name, propellers, maxSpeed },
    { new: true }
  )
  .then(updatedDrone => res.redirect("/drones"))
  .catch(error =>(error))
});

router.post('/drones/:droneId/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { droneId } = req.params;

  Drone.findByIdAndDelete(droneId)
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});


module.exports = router;
