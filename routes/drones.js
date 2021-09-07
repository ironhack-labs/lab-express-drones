const express = require('express');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
  .find()
  .then((dronesFromDB) => {
    console.log('Retrieved drones from DB:', dronesFromDB);
    res.render('drones/list.hbs', {drones: dronesFromDB});
  })
  .catch(error => {
    console.log('Error while getting the drones from the DB: ', error);
    next(error);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');
});


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone
    .create({ name, propellers, maxSpeed  })
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
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
