const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then(droneDB => res.render("drones/list", { droneDB }))
    .catch(err => console.log(err))

});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch(err => {
      res.redirect("/drones/create")
    })

});

router.get('/drones/:idDrone/edit', (req, res, next) => {

  const { idDrone } = req.params

  Drone
    .findById(idDrone)
    .then(droneDB => res.render("drones/update-form", droneDB))
    .catch(err => console.log(err))

});

router.post('/drones/:idDrone/edit', (req, res, next) => {

  const { idDrone } = req.params

  Drone
    .findByIdAndUpdate(idDrone, req.body, { runValidators: true })
    .then(() => res.redirect("/drones"))
    .catch(err => {
      console.log(err)
      res.redirect(`/drones/${idDrone}/edit`)
    })
});

router.post('/drones/:idDrone/delete', (req, res, next) => {

  const { idDrone } = req.params

  Drone
    .findByIdAndDelete(idDrone)
    .then(() => res.redirect("/drones"))
    .catch(err => console.log(err))
});

module.exports = router;
