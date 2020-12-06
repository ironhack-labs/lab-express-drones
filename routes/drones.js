const express = require('express');

const Drone = require("../models/Drone.model")

const router = express.Router();

router.get('/drones', async (req, res, next) => {
  try {
    const drones = await Drone.find();
    res.render("drones/list", {drones})
  } catch (err) {
    console.error(err)
  }
});

router.get('/drones/create', (req, res, next) => {
  try {
    res.render("drones/create-form")
  } catch (err) {
    console.error(err)
  }
});

router.post('/drones/create', async (req, res, next) => {
  try {
    const { name, propellers, maxSpeed } = req.body;
    const addDrone = await Drone.create({ name, propellers, maxSpeed })
    const drones = await Drone.find();
    res.render("drones/list", {drones})
  } catch (err) {
    console.error(err)
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const dron = await Drone.findById(id)
    res.render("drones/update-form", dron)
  } catch (err) {
    console.error(err)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = req.body;
    const drone = await Drone.findByIdAndUpdate(id,{ name, propellers, maxSpeed }, {
      new: true,
    })
   const drones = await Drone.find();
    res.render("drones/list", {drones})
  } catch (err) {
    console.error(err)
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;
    const drone = await Drone.findByIdAndDelete(id);
    res.redirect("/drones")
  } catch (err) {
    console.error(err)
  }
});

module.exports = router;
