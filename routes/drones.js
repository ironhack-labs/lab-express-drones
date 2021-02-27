const express = require('express');
const DroneModel = require('../models/Drone.models');

//

const router = express.Router();

router.get('/drones', (req, res, next) => {
  DroneModel.find()
  .then((dbRes) => {
    console.log(dbRes);
    res.render('drones/list.hbs', {drones : dbRes})
  })
  .catch((err) => console.log(err));
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', async (req, res, next) => {
  console.log(req.body);
  const {name, propellers, maxSpeed} = req.body;
  console.log(name, propellers, maxSpeed);
  try {
    await DroneModel.create({
      name,
      propellers,
      maxSpeed,
    });
    console.log('Drone successfully created')
    res.redirect('/drones')
  }
  catch (err) {
    console.log('Try again :(')
    res.render('/drones/drone-create.hbs')
    next(err);
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
