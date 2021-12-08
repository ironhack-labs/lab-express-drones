const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(data => {
      console.log("Data", data);
      res.render("drones/list", {
        "drones": data
      })
    }).catch(error => {
      console.log('Error while getting drones from the DB: ', error);
      next(error);
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {
    name,
    propellers,
    maxSpeed,
  } = req.body;

  Drone.create({
      name,
      propellers,
      maxSpeed
    })
    .then(() => res.redirect('/drones'))
    .catch(err => {
      console.log("Error while getting drones from the DB: '", err)
      res.render('error')
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {
    id
  } = req.params;

  Drone.findById(id)
    .then((drone) => {
      res.render('drones/update-form', drone)
    }).catch(err => {
      console.log("errorrr", err)
      res.render('error')
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {
    id
  } = req.params;
  const {
    name,
    propellers,
    maxSpeed,
    ...rest
  } = req.body
  Drone.findByIdAndUpdate(id, {
      name,
      propellers,
      maxSpeed
    })
    .then((drone) => {
      res.render('drones/update-form', drone)
    }).catch(err => {
      console.log("error", err)
      res.render('error')
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect(`/drones`))
    .catch(err => next(err))
  });

module.exports = router;