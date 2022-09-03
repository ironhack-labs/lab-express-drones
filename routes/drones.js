const express = require('express');
const router = express.Router();

const droneModel = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  droneModel.find()
    .then((getDrones) => {
      console.log(getDrones)
      res.render('drones/list', { getDrones })
    })
    .catch((err) => {
      console.error(err);

    })
})

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body // console.log(req.body)
  droneModel.create({ name, propellers, maxSpeed })
    .then((newDrone) => {
      res.redirect("/drones")
    })
    .catch((err) => {
      console.error(err);

    })


});

router.get('/drones/:id/edit', (req, res, next) => {
  droneModel.findById(req.params.id)
    .then((drone) => {
      res.render('drones/update-form', drone)
    })
    .catch((err) => {
      console.error(err);
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  droneModel.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
    .then((drone) => {
      res.redirect('/drones')
    })
    .catch((err) => {
      console.error(err);
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  droneModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch((err) => {
      console.error(err);
    })
});

module.exports = router;
