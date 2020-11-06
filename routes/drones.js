const express = require('express');

const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {

  Drone.find().then((dronesFromDB) => {
    console.log(dronesFromDB)
    res.render('drones/list', { allTheDrones: dronesFromDB })
  })
});

// show form to user
// GET /drones/create
router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});


// pick up data from submitted form
// POST /drones/create
// name: req.body.name = ModelPropertyName.req.body.formInputFieldName
router.post('/drones/create', (req, res, next) => {

  console.log(req.body);
  Drone.create({ name: req.body.name, propellers: req.body.propellers, maxSpeed: req.body.maxSpeed }).then(() => {
    res.redirect('/drones')
  })
});

// GET drones/id/edit
router.get('/drones/:id/edit', (req, res, next) => {

  Drone.findById(req.params.id).then((drone) => {
    res.render('drones/update-form', drone)
  })
});

// POST drones/id/edit
router.post('/drones/:id/edit', (req, res, next) => {

  Drone.findByIdAndUpdate(req.params.id, { name: req.body.name, propellers: req.body.propellers, maxSpeed: req.body.maxSpeed }).then(() => {
    res.redirect('/drones')
  })
});

// POST /drones/id/delete
router.post('/drones/:id/delete', (req, res, next) => {

  Drone.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/drones')
  })
});

module.exports = router;
