const express = require('express');
const droneModel = require('../models/drone.model');
// console.log(droneModel)
// require the Drone model here

const router = express.Router();

router.get('/drones/list', (req, res) => {
  droneModel.find({})
  .then((dronesFromDB) => {
    res.render('drones/list', { dronesFromDB })
  })
  .catch((error) => `Error while fetching drones: ${error}`)
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  droneModel.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones/list"))
    .catch(() => res.render("/drones/create"))
});

router.get('/drones/:id/update-form', (req, res) => {
  const { id } = req.params

  droneModel.findById(id)
  .then((droneToEdit) => {
    res.render("drones/update-form", droneToEdit)
  })
  .catch((error) =>
    console.log(`Error while getting a drone to edit: ${error}`))
});

router.post('/drones/:id/update-form', (req, res) => {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = req.body;

    droneModel.findByIdAndUpdate(
      id,
      { name, propellers, maxSpeed },
      { new: true }
    )
    .then(() => res.redirect('/drones/list'))
    .catch(() => res.render("/drones/:id/update-form"))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;

  droneModel.findByIdAndDelete(id)
  .then(() => res.redirect('/drones/list'))
  .catch((err) => 
    console.log(`Error while getting a drone to edit: ${err}`))
});

module.exports = router;
