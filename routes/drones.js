const express = require('express');
const router = express.Router();
const Drones = require('../models/Drone.model');

// require the Drone model here

router.get('/', async (req, res, next) => {
  try {
    // Iteration #2: List the drones
    const drones = await Drones.find();
    res.render('drones/list', { drones });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/create/:id?', async (req, res, next) => {
  // Iteration #3: Add a new drone

  try {
    let drone = {};

    const formData = {
      title: 'Add New Drone',
      action: '/drones/create',
      btnSubmit: 'Add Drone',
    };
    if (req.params.id) {
      formData.title = 'Edit Drone';
      formData.action = '/drones/update/' + req.params.id;
      formData.btnSubmit = 'Save Changes';
      drone = await Drones.findById(req.params.id);
    }

    res.render('drones/create-form', { drone, formData });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const data = req.body;
    const saved = await Drones.create(data);
    if (saved) res.redirect('/drones');
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/update/:id', async (req, res, next) => {
  // Iteration #4: Update the drone
  console.log('updating');
  try {
    const data = req.body;
    const updated = await Drones.findByIdAndUpdate(req.params.id, data);

    if (updated) res.redirect('/drones');
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/delete/:id', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const deleted = await Drones.findByIdAndDelete(req.params.id);

    if (deleted) {
      res.redirect('/drones');
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
