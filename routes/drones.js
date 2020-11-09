const express = require('express');

const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
    .then((allDrones) =>
      res.render('drones/list', {
        allDrones
      })
    )
    .catch((error) => `An error occurred when loading ${error}`)
});

router.get("/drones/create", (req, res) => res.render("drones/create-form"));

router.post('/drones/create', (req, res, next) => {
  const {
    name,
    propellors,
    maxSpeed
  } = req.body;

  Drone.create({
      name,
      propellors,
      maxSpeed
    }).then(() => res.redirect("/drones"))
    .catch((error => {
      `An error occurred while creating ${error}`,
      res.render('drones/create-form')
    }))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const {
    id
  } = req.params;
  Drone.findById(id)
    .then((droneToEdit) => res.render('drones/update-form',
      droneToEdit
    ))
    .catch((error) => `Error while getting a drone to edit: ${error}`);
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {
    id
  } = req.params;
  const {
    name,
    propellors,
    maxSpeed
  } = req.body;

  Drone.findByIdAndUpdate(id, {
      name,
      propellors,
      maxSpeed
    }, {
      new: true
    })
    .then(() => res.redirect("/drones"))
    .catch((error => {
      `An error occurred while creating ${error}`,
      res.render(`/drones/${id}/edit`)
    }))

});

router.post('/drones/:id/delete', (req, res, next) => {
  const {
    id
  } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((error) => console.log(`Error while deleting drone: ${error}`));
});

module.exports = router;