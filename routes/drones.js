const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

/* Because we added the prefix on app.js, here we can extract /drones from all our routes */
router.get('/', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find();
    res.render('drones/list', { drones });
  } catch(error) {
    console.log(error);
    /* Because we're using Ironlauncher as generator, we have access to some cool pre-done things. One of those
    is error handling. On line 36 of app.js basically they're saying that, if an error occurs, render error handling views.
    This is the place where we add a little something to trigger that line. If we use the next() keyword of our routes,
    what happens is that, when an error occurs, it will go for the NEXT piece of code that makes sense for the error message
    we're getting. Meaning, it will find that line 36 of app.js and trigger the error views. */
    next(error);
  }
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const {name, propellers, maxSpeed} = req.body;
    await Drone.create({
      name,
      propellers,
      maxSpeed
    })
    res.redirect('/drones');
  }catch(error){
    console.log(error);
    res.render('drones/create-form');
  }
});

router.get('/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const { id } = req.params;
    const drone = await Drone.findById(id);
    res.render('drones/update-form', drone);
  }catch(error) {
    console.log(error);
    next(error);
  }
});

router.post('/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const { id } = req.params;
    const {name, propellers, maxSpeed} = req.body;
    await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true});
    res.redirect('/drones');
  }catch(error){
    console.log(error);
    next(error);
  }
});

router.post('/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const { id } = req.params;
    await Drone.findByIdAndDelete(id);
    res.redirect('/drones');
  }catch(error){
    console.log(error);
    next(error);
  }
});

module.exports = router;

/* Overall, well done writting the routes. Very clean code and logic. */