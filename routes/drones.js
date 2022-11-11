const express = require('express');
const { find } = require('./../models/Drone.model');
const router = express.Router();

const Drones = require('./../models/Drone.model');

router.get('/drones', (req, res, next) => {

  Drones
    .find()
    .then(dronesFromDb => {
      res.render('drones/list', { drones: dronesFromDb })
      console.log(dronesFromDb)
    })
    .catch(err => console.log(err))


});

router.get('/drones/create', (req, res, next) => {

  res.render("drones/create-form")

});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body
  console.log(name, propellers, maxSpeed)
  Drones
    .create({ name, propellers, maxSpeed })
    .then(drones => {
      res.redirect(`/drones`)
    })
    .catch(err => console.log(err))
})




router.get('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params

  Drones
    .findById(id)
    .then(drones => {
      res.render('drones/update-form', drones)
    })
    .catch(err => console.log(err))

});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params

  Drones
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))

});

router.post('/drones/:id/delete', (req, res, next) => {

  const { id } = req.params

  Drones
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))


});

module.exports = router;
