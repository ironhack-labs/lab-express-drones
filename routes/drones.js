const express = require('express');
const router = express.Router();
const Drone = require("./../models/Drone.model")


router.get('/drones', (req, res, next) => {
  Drone.find({})
  .then((dbDrones)=>{
    res.render("drones/list",{
      DroneList : dbDrones
    })
 
  })
});

router.get('/drones/create', (req, res, next) => {
      res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const {name,propellers,maxSpeed} = req.body
  Drone.create({
    name,
    propellers,
    maxSpeed
  })
  .then((newDron)=>{
    console.log(newDron)
    res.redirect("/drones")
  })
  .catch((e)=> console.log(e))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
