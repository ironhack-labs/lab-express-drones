const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model")


router.get('/drones', (req, res, next) => {

  Drone
    .find()
    .then(myDrones => res.render("drones/list", { myDrones }))
    .catch(err => console.log("not listing", err))

});

router.get('/drones/create', (req, res, next) => {

  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name: name, propellers: propellers, maxSpeed: maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch(err => console.log("not creating", err))

});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params

  Drone
    .findById(id)
    .then(data => res.render("drones/update-form", data))
    .catch(err => console.log("not updating drone", err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch(err => console.log("not updating drone", err))
});

router.post('/drones/:id/delete', (req, res, next) => {

  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch(err => console.log("not updating drone", err))
});

module.exports = router;
