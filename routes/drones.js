const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model")


router.get('/drones', (req, res, next) => {

  Drone
    .find()
    .then(drones => res.render("drones/list", {drones}))
    .catch(err => console.log(err))

});

router.get('/drones/create', (req, res, next) => {

  res.render("drones/create-form")

});

router.post('/drones/create', (req, res, next) => {

  const {name , propellers, maxSpeed} = req.body

  Drone
  .create({name , propellers, maxSpeed})
  .then(()=> res.redirect("/drones"))
  .catch(res.render("drones/create-form"))

});

router.get('/drones/:id/edit', (req, res, next) => {
  
  const droneId = req.params

  Drone
    .findById(droneId.id)
    .then((drone) => res.render("drones/update-form", drone))
    .catch(err => console.log(err))
  
});

router.post('/drones/:id/edit', (req, res, next) => {
 
  const droneId = req.params   
  const {name , propellers, maxSpeed} = req.body  

  Drone
  .findByIdAndUpdate(droneId.id, {name , propellers, maxSpeed})
  .then(res.redirect("/drones"))
  .catch(res.render(`/drones/${droneId.id}/edit`))

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = req.params

  Drone
    .findByIdAndDelete(droneId.id)
    .then(()=> res.redirect("/drones"))
    .catch(err => console.log(err))
});

module.exports = router;
