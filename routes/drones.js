const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model')
const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
        .then((drones) => {
          res.render("drones/list", { drones })
        })
        .catch((err) => console.log(`Could not render /drones path: ${err}`))
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((err) => console.log(`Could not render the creation of the drone: ${err}`))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  console.log(`the id is ${id}`);

  Drone.findById(id)
    .then((droneToEdit) => {
      res.render("drones/update-form", droneToEdit)
    })
    .catch((err) => console.log(`Could not render the editing page for the drone: ${err}`))
});

router.post('/drones/:id/edit', (req, res, next) => {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = req.body;

    Drone.findByIdAndUpdate(
      id,
      { name, propellers, maxSpeed},
      { new: true}
    )
      .then((updatedDrone) => res.redirect("/drones"))
      .catch((err) => console.log(`Could not render the drones page : ${err}`))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((err) => console.log(`Could not render the drones page : ${err}`))
});

module.exports = router;
