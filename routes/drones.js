const express = require('express');
const router = express.Router();

// require the Drone model here and list de drones, iteration #2
const Drones = require('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {

  Drones
    .find()
    .then(dronesList => { res.render('drones/list', { dronesList }) })
    // ojo!! esto no es la ruta al hacer el render y comprobar es la de arriba!!
    .catch(err => console.log(err))

});


// ITERATION #3 Create new Dron
router.get('/drones/create', (req, res, next) => {

  res.render('drones/create-form')

});


router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body

  Drones
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect('drones'))
    .catch(err => console.log(err))

});


// ITERATION #4 Update the Dron
router.get('/drones/:drones_id/edit', (req, res, next) => {

  // res.render('drones/update-form')

  const { drones_id } = req.params

  Drones
    .findById(drones_id)
    .then((drone) => res.render('drones/update-form', drone))
    .catch(err => console.log(err))

});

router.post('/drones/:drones_id/edit', (req, res, next) => {

  const { drones_id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drones
    .findByIdAndUpdate(drones_id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

});


//ITERATION #5 Delete the Dron
router.post('/drones/:drones_id/delete', (req, res, next) => {

  const { drones_id } = req.params

  Drones
    .findByIdAndDelete(drones_id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

module.exports = router;
