const express = require('express');
const Dron = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {

  //res.send("Hola tío") De esta forma comprobamos que la ruta en localHost funciona

  Dron
    .find()
    .then(drone => {
      console.log(drone)
      res.render('drones/list', { drone }) // drones es la carpeta drones de dentro de las vistas y list es la de hbs
    })
    .catch(err => console.log(err))
});



router.get('/drones/create', (req, res, next) => {

  //res.send("diseeeeeeeeeel")

  res.render('drones/create-form')

});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body
  console.log(req.body)

  Dron
    .create({ name, propellers, maxSpeed })
    .then(droneFromDB => console.log(`New drone created: ${droneFromDB}`))
    //.then(() => res.redirect(`/drones`))
    .catch(error => next(error));

});


router.get('/drones/:drone_id/edit', (req, res, next) => { // entre el drone y edit va el id, que debe de coincidir perfectamente con el objeto que le estamos dando en req.params

  //res.send("diseeeeooooo")

  const { drone_id } = req.params
  console.log(drone_id)

  Dron

    .findById(drone_id)
    .then(drone => {
      res.render('drones/update-form', drone)
    })
    .catch(err => console.log(err))
});


router.post('/drones/:drone_id/edit', (req, res, next) => {
  const { drone_Id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Dron

    .findByIdAndUpdate(drone_Id, { name, propellers, maxSpeed })
    .then(() => res.redirect(`/drones`))
    .catch(error => next(error));
});



router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
