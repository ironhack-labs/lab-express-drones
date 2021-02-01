/*  */const express = require('express');

// require the Drone model here
const Drone = require("../models/Drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => {
        console.log(`drones disponibles : ${drones}`)
        res.render("drones/list", {drones})
    })
    .catch(error =>
      console.log(`Error while getting a single book for edit: ${error}`)
    );
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
const drone = req.body

Drone.create(drone)
  .then(() => res.redirect("/drones"))
  .catch((e) => next(e));

})
  // ... your code here

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id
 
  Drone.findById(id)
     .then((drone) => res.render("drones/update-form", drone))
     .catch((e) => next(e));
  
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const drone = req.body
  const id = req.params.id;
  
  Drone.findByIdAndUpdate(id,drone,{new: true})
    .then(()=> res.redirect("/drones"))
    .catch(() => res.render("drones/update-form", drone))
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id;

  Drone.findByIdAndDelete(id)
  .then(()=> {
    console.log(`Drone ${req.params.id} deleted`)
    res.redirect("/drones")})
  .catch(error => console.log(`Error while deleting a drone: ${error}`));
});

module.exports = router;
