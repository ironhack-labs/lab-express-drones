const express = require('express');

// require the Drone model here
const DroneModel = require("./../models/Drone.model")

const router = express.Router();

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const dronesList = await DroneModel.find()
    // console.log(dronesList)
    res.render('list', { dronesList })
  } catch (err) {
    next(err)
  }
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("create-form");
});

router.post('/drones/create', async (req, res, next) => {
  console.log(req.body)
  // Iteration #3: Add a new drone
  try {
    await DroneModel.create(req.body);
    res.redirect("/drones");
  } catch (err) {
    // next(err)
    res.render("create-form", { error: "Try again" })
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const updateDrone = await DroneModel.findById(req.params.id)
    res.render("update-form", updateDrone)
  } catch (err) {
    next(err)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    await DroneModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect("/drones");
  } catch (err) {
    res.render("update-form", { error: "Try again" })
  }
});

//create form with method POST
router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    // console.log(req.params.id)
    console.log("check---------------------------")
    await DroneModel.findByIdAndRemove(req.params.id);
    res.redirect("/drones");
  } catch (err) {
    next(err)
  }
});

module.exports = router;
