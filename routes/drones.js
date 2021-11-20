const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  try {
    const drones = await Drone.find();
    res.render('drones/list', { drones });
  } catch (err) {
    console.log(`Err while getting the posts from the DB: ${err}`);
    next(err);
  }
});

router.get('/drones/create', (req, res, next) => {
  try {
    res.render('drones/create-form');
  } catch (err) {
    console.log(`Err while getting the posts from the DB: ${err}`);
    next(err);
  }
});

router.post('/drones/create', async (req, res, next) => {
  try {
    const { name, propellers, maxSpeed } = req.body;
    await Drone.create({ name, propellers, maxSpeed });
    res.redirect('/drones');
  } catch (err) {
    res.render('drones/create-form');
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const drone = await Drone.findById(req.params.id);
    res.render('drones/update-form', drone);
  } catch (err) {
    console.log(`Err while getting the posts from the DB: ${err}`);
    next(err);
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  const droneId = req.params.id;
  try {
    const { name, propellers, maxSpeed } = req.body;
    await Drone.findByIdAndUpdate(
      droneId,
      { name, propellers, maxSpeed },
      { new: true }
    );
    res.redirect('/drones');
  } catch (err) {
    res.render(`/drones/${droneId}/edit`);
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    const droneId = req.params.id;
    await Drone.findByIdAndDelete(droneId);
    res.redirect('/drones');
  } catch (err) {
    console.log(`Err while getting the posts from the DB: ${err}`);
    next(err);
  }
});

module.exports = router;
