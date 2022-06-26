const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {

  Drone
    .find()
    .then(drones => {
      // console.log(drones)
      res.render('drones/list', { drones })
    })
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {



  res.render('drones/create-form')


});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body


  Drone
    .create({ name, propellers, maxSpeed })
    .then(drone => res.redirect('/drones'))
    .catch(err => console.log(err))

});

router.get('/drones/:drone_id/edit', (req, res, next) => {  //drone id llamar igual que en 42

  const { drone_id } = req.params //drone_id llamar igual
  // console.log("hola aqui estamos", drone_id)

  Drone

    .findById(drone_id)
    .then(drones => {
      res.render('drones/update-form', drones)
    })
    .catch(err => console.log(err))

});

router.post('/drones/:drone_id/edit', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body
  const { drone_id } = req.params // tenia problema con query
  //console.log("hola estamos aqui", drone_id)

  Drone
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(drones => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))

});

router.post('/drones/:drone_id/delete', (req, res, next) => {

  const { drone_id } = req.params
  console.log("hola buenas tarESSS", drone_id)

  Drone
    .findByIdAndDelete(drone_id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

});

module.exports = router;
