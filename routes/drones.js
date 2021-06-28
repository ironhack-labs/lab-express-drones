const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get('/drones', async (req, res, next) => {

  try {
    const drones = await Drone.find();
    res.render('drones/list', { drones });
  } catch (e) {
    console.log("An error ocurred while displaying", e);
  }

});

router.get('/drones/create', (req, res) => {
  res.render("drones/create-form");
});

router.post('/drones/create', async (req, res) => {
  const { name, propellers, maxSpeed } = req.body;

  try {
    await Drone.create(
      {
        name,
        propellers,
        maxSpeed,
      }
    );
  } catch (e) {
    console.log("An error ocurred", e);
    res.redirect("/drones/create");
  }
  res.redirect("/drones");

});

router.get('/drones/:id/edit', async (req, res) => {
  const droneToEdit = await Drone.findById(req.params.id);

  res.render("drones/update-form", droneToEdit);
});

router.post('/drones/:id/edit', async (req, res) => {
  const { name, propellers, maxSpeed } = req.body;

  await Drone.findByIdAndUpdate(req.params.id, {
    name, propellers, maxSpeed,
  });

  res.redirect("/drones");
});

router.post('/drones/:id/delete', async (req, res) => {
  await Drone.findByIdAndDelete(req.params.id)
  res.redirect("/drones");
});

module.exports = router;
