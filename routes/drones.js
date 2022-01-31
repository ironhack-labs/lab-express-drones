const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get('/drones/create', (req, res) => res.render('drones/create-form.hbs'));

router.post('/drones/create', (req, res, next) => {
    const { name, propellers, maxSpeed } = req.body;
    Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

  // Iteration #2: List the drones
  // ... your code here
  router.get('/drones', (req, res, next) => {
    Drone.find()
      .then(allTheDronesFromDB => {
        // -> allTheDronesFromDB is a placeholder, it can be any word
        console.log('Retrieved drones from DB:', allTheDronesFromDB);
   
        res.render('drones/list.hbs', { drones: allTheDronesFromDB });
      })
      .catch(error => {
        console.log('Error while getting the books from the DB: ', error);
   
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });


//router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
//});

//router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
//});

router.get('/drones/:droneId/edit', (req, res, next) => {
  const { droneId } = req.params;
 
  Drone.findById(droneId)
    .then(droneToEdit => {
      // console.log(droneToEdit);
      res.render('drones/update-form.hbs', { drone: droneToEdit }); // <-- add this line
    })
    .catch(error => next(error));
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  const { droneId } = req.params;
  const { name, propellers, maxSpeed } = req.body;
 
  Drone.findByIdAndUpdate(droneId, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrone => res.redirect(`/drones`)) // go to the details page to see the updates
    .catch(error => next(error));
});


router.post('/drones/:droneId/delete', (req, res, next) => {
  const { droneId } = req.params;
 
  Drone.findByIdAndDelete(droneId)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
