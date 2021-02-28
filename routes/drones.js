const express = require('express');
const router = express.Router();

// require the Drone model here
const DroneModel = require("./../models/DroneModel");

router.get('/drones/list', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((dbRes) => {
      console.log(dbRes);
      res.render("drones/list", {drone: dbRes})
    })
    .catch((error) => next(error))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.create(req.body)
    .then(drones => {
      console.log(`New drone created: ${drones.name}`)
      res.redirect("/drones/list");
    })
    .catch(next)
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((drones) => res.render("drones/update-form",{drones}))
    .catch(next)
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  try {
    await DroneModel.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones/list");
  } catch (err) {
    next(err);
  }
});

router.get('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try{
    await DroneModel.findByIdAndDelete(req.params.id);
    res.redirect("/drones/list");
  }
  catch (error){next(error)}
});

module.exports = router;
