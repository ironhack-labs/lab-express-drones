const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((dbDrones) => {
    res.render("drones/list", { dbDrones });
  })
  .catch((err) => console.log(`Err while displaying drones input page: ${err}`));

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    Drone.find()
      .then((dbDrones) => {
        res.render("drones/create-form", { dbDrones });
      })
      .catch((err) => console.log(`Err while displaying drones input page: ${err}`));
  });


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    const { name, propellers, maxSpeed } = req.body;
   
    Drone.create({ name, propellers, maxSpeed })
      .then(() => res.redirect('/drones')) // if everything is fine, redirect to list of posts
      .catch(err => {
        console.log(`Err while creating the drone in the DB: ${err}`);
        next(err);
      });
  });

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
 
  Drone.findById(id)
    .then(droneToEdit => {
      console.log(droneToEdit)
      // console.log(bookToEdit);
      res.render('drones/update-form.hbs', droneToEdit); // <-- add this line
    })
    .catch(error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
 
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrone => {
      console.log(updatedDrone)
      res.redirect(`/drones`)})
    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
 
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
