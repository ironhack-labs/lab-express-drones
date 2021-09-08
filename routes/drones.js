const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(allTheDronesFromDB => {
      console.log('Retrieved drones from DB:', allTheDronesFromDB);

      res.render('drones/list.hbs', { drones: allTheDronesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the drones from the DB: ', error);

      next(error);
    });
});
// Iteration #3: Add a new drone
router.get('/drones/create', (req, res) =>
  res.render('drones/create-form.hbs')
);

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  Drone.findById(id)
    .then(droneToEdit => {
      res.render('drones/update-form.hbs', droneToEdit);
    })
    .catch(error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(drones => res.redirect(`/drones`))
    .catch((error, drones) => {
      console.log('Error while updating a drone ->', error);
      res.render('drones/update-form.hbs', drones);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
