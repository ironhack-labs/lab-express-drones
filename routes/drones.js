const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

router.get('/drones', (req, res, next) => {

  DroneModel
    .find()
    .then(drones => {
      res.render("drones/list", { drones })
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")

})

router.post('/drones/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body
  DroneModel
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch(err => console.log("ERROR", err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params

  DroneModel
    .findById(id)
    .then(drone => res.render("drones/update-form", drone))
    .catch(err => console.log("ERROR", err))
});

router.post('/drones/:id/edit', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params

  DroneModel
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch(err => console.log("ERROR", err))

});

router.post('/drones/:id/delete', (req, res, next) => {

  const { id } = req.params

  DroneModel
    .findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch(err => console.log("ERROR", err))
});

module.exports = router;
