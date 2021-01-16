const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();
require("../configs/db.config.js")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dronesFromDB)=> res.render('drones/list', {dronesFromDB}))
    .catch((err) => console.log(`Error while getting all drones from DB: ${err}`))
});

router.get('/drones/create', (req, res, next) => {
  Drone.find()
    .then((dronesFromDB) => res.render("drones/create-form", { dronesFromDB }))
    .catch((err) => console.log(`Error while displaying the form to create a new drone: ${err}`));

});

router.post('/drones/create', (req, res, next) => {
  //console.log("savedDrone:", req.body)
  Drone.create(req.body)
    .then((savedDrone)=> {
      console.log(savedDrone)
      res.redirect("/drones")
    })
    .catch((err) => console.log(`Error while saving a new drone to DB: ${err}`));
})    



router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then((foundDrone) => {
    //console.log("found drone: ", foundDrone);
    res.render("drones/update-form", {foundDrone});
    })
  .catch((err) => console.log(`Error while getting drone from DB for editing: ${err}`));
})
  


router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
