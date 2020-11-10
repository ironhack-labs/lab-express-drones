const express = require('express');
const Drone = require("../models/Drone.model.js");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(allDronesFromDB =>{
    res.render("drones-list", {drones: allDronesFromDB })
  })
  .catch(err => console.log(`The error ${err} came up!`))
})

router.get('/drones/create', (req, res) => {
  res.render("drone-create")
});

router.post('/drones/create', (req, res, next) => {
  const { name , propellers, maxSpeed } = req.body;

  Drone.create({ name , propellers, maxSpeed })
  .then(() => res.redirect("/drones"))
  .catch(error => `Error occured while creating drones: ${error}`)
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Drone.findById ( id )
  .then( droneToEdit => {
    res.render("update-form", droneToEdit)
  })

});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name , propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate( id, { name , propellers, maxSpeed }, {new: true})
  .then(() => res.redirect("/drones"))
  .catch(error => `Error occured while updating drones: ${error}`)
});

router.post('/drones/:id/delete', (req, res, next) => {
const { id } = req.params;

Drone.findByIdAndDelete( id )
.then(() => res.redirect("/drones"))
.catch(error => `Error occured while deleting drones: ${error}`)

});

module.exports = router;
