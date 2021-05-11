const express = require('express');
const Dron = require('../models/Drones.models');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Dron.find().then(prueba => {
    console.log(prueba);
    res.render('drones/list', {
      drones: prueba
    })
  }).catch((error) => next(error))

});

router.get('/drones/create', (req, res, next) => {
  Dron.find().then(dron => {
    console.log("este es el dron", dron);
    res.render('drones/create-form', {

      drones: dron
    })
  }).catch((error) => next(error))
});



router.post('/drones/create', (req, res, next) => {
  console.log("ESTE ES EL BODY", req.body);
  const {
    name,
    propellers,
    maxSpeed
  } = req.body;


  Dron.create({
      name,
      propellers,
      maxSpeed
    })
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));


  /*   res.render('drones/create-form'); */
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;