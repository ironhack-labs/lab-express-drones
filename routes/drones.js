const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  Drone.find({})
  .then((drone) => {
    console.log(drone);
    res.render("drones/list", { drone });
  })
  .catch((err) => next(err));
});


router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form");

  // Iteration #3: Add a new drone
  // ... your code here
});

router.post("/drones/create", (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;

  Drone.create({name, propellers, maxSpeed })
    .then((drone) => res.redirect(`/drones`))
    .catch((err) => next(err));
});



router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  Drone.findById(id)
  .then((drone) => {
  res.render('drones/update-form', {drone})}
  )  .catch((err) => next(err));
});


router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  const {name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id , {name, propellers, maxSpeed })
  .then((drone) => res.redirect (`/drones`))
  .catch(err => next(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params;
  Drone.findByIdAndRemove(id)
  .then(() => res.redirect ('/drones'))
  .catch((err) => next(err))
});


module.exports = router;


