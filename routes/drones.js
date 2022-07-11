const express = require('express')
const router = express.Router()
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((dronesFromDB) => {
      const data = {
        dronesArr: dronesFromDB,
      }
      res.render('drones/list', data)
    })
    .catch((error) => {
      console.log('Error finding Drones in DB', error)
      next(error)
    })
})

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
})

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }

  Drone.create(newDrone)
    .then(() => {
      console.log('success creating new drone')
      res.redirect('/drones')
    })
    .catch((err) => {
      console.log('A problem ocurred creating your drone...', err)
    })
})

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  console.log(id)
  Drone.findById(id)
  .then( (droneDetails) => {
    res.render("drones/update-form", droneDetails)
  })
  .catch( (error) => {
    console.log("Error updating the Drone in DB", error);
    next(error);
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const droneId = req.params.id;

  const newDetails= {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };

  Drone.findByIdAndUpdate(droneId, newDetails)
  .then( () => {
    res.redirect("/drones")
  })
  .catch( (error) => {
    console.log("Error updating the Drone in DB", error);
    next(error);
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
})

module.exports = router
