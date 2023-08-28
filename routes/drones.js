const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((dronesFromDb) => {
      // const data = {
      //   drones: dronesFromDb
      // }
      res.render("drones/list",{drones: dronesFromDb});
    })
    .catch(e => console.log(e));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name,propellers,maxSpeed} = req.body
    res.render("drones/create-form", {erro: "fill the fields"})
    
    Drone.create({name,propellers,maxSpeed})
    .then(()=> {
      res.redirect("/drones");
    })
    .catch((error)=>{
      res.render("drone/create-form", {errorMsg: error})
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  res.render("drones/update-form");
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {name,propellers,maxSpeed} = req.body
  Drone.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed})
    .then(() => {
      res.redirect("/drones");
    })
    .catch((e) => console.log(e))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id);
});

module.exports = router;
