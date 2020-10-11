const express = require('express');
const Drone = require('../models/drone.model');
const mongoose = require('mongoose');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  
  Drone.find().then(drones => {
    res.render("drones/list.hbs", { drones });
  }).catch( (err) => {
    console.log(err);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

    res.render("drones/create-form.hbs");
});


router.post("/drones/create", (req, res, next) => {
  let newDrone = req.body;
  Drone.create(newDrone).then(() => {
    res.redirect("/drones");
  }).catch( (err) => {
    console.log(err);
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id;
  Drone.findById(id).then((drone) => {
      res.render('drones/update-form.hbs', {drone})
  }).catch( (err) => {
    console.log(err);
  });

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id;
  Drone.findByIdAndUpdate(id, { $set: req.body }).then(() => {
    res.redirect('/drones');
  }).catch( (err) => {
    res.redirect('/drones/{{ req.body._id }}/edit')
    console.log(err);
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  let id = req.params.id;
  Drone.findByIdAndRemove(id).then(() => {
    res.redirect('/drones');
  }).catch( (err) => {
    res.redirect('/drones');
    console.log(err);
  });
});

module.exports = router;
