const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(allDronesFromDB => {
    console.log(allDronesFromDB);
    res.render('drones/list', {allDronesFromDB});
  })
  .catch(error => {
    console.log('Error displaying all drones: ', error);
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  Drone.create(req.body)
  .then(() => {
    res.redirect('/drones');
  })
  .catch(() => {
    res.render('drones/create-form');
    window.alert('Your drone was not saved! Click ok and try again');
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then(drone => {
    res.render('drones/update-form', drone);
  })
  .catch(error => {
    console.log('Error trying to update the drone: ', error);
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(() => {
    res.redirect('/drones');
  })
  .catch(error => {
    console.log('Error updating the drone: ', error);
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/drones');
  })
  .catch(error => {
    console.log('There was an error while deleting the drone: ', error);
  });
});

module.exports = router;
