const express = require('express');
const router = express.Router();
const DroneModel = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => {

      res.render('drones/list', { drones })

    })
    .catch((err) => next(err))
}
);

router.get('/drones/create', (_req, res) => {

  // Iteration #3: Add a new drone


  res.render('drones/create-form')
})


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  const { name, propellers, maxSpeed } = req.body;
  DroneModel.create({ name, propellers, maxSpeed })
    .then(() => {
      res.render('drones/create-form')
    })
    .catch((err) => {
      next(err);
    })
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id: idDrones } = req.params

  DroneModel.findById(idDrones)
    .then(drone => {
      res.render('drones/update-form', drone)
    })
    .catch((err) => next(err));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body
  DroneModel.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
    .then((drones) => {
      console.log(drones)
      res.redirect('/drones');
    })
    .catch((err) => next(err));
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
    .then((drones) => {
      console.log(drones)
      res.redirect('/drones');
    })
    .catch((err) => next(err));


});

module.exports = router;
