const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')


// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(drones => {
      // console.log('here are the drones from the DB, allDronesFromDB');
      res.render("drones/list", {
        drones
      })
    })
    .catch(err => {
      console.log('an error occured while getting drone list', err)
    })
})



router.get('/drones/create', (req, res, next) => {

  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  Drone.create(req.body)
    .then(() => {
      res.redirect('/drones')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
    .then((droneToBeEdited) => {
      res.render("drones/update-form.hbs", droneToBeEdited);
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});



router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch(err => console.log("An error occurred while trying to delete drone", err))
});

module.exports = router;