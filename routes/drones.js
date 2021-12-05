const express = require('express');
const router = express.Router();

// require the Drone model
const Drone = require('../models/drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(drones => {
      console.log('Drones', drones);
      res.render('drones/list.hbs', { drones });
  })
  .catch(err => {
      console.log('Error',err);
      res.send("Error al listar los drones");
  })

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(drone => {
      console.log('Drone', drone);
      res.redirect('/drones');
  }
  )
  .catch(err => {
      console.log('Error',err);
      res.send("Error al crear el drone");
  }
  )
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then(drone => {
      console.log('Drone', drone);
      res.render('drones/update-form.hbs', { drone });
  })
  .catch(err => {
      console.log('Error',err);
      res.send("Error al editar el drone");
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed,...rest } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(drone => {
      console.log('Drone', drone);
      res.redirect('/drones');
  })
  .catch(err => {
      console.log('Error',err);
      res.send("Error al editar el drone");
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
