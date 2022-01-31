const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model.js');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(allTheDronesFromDB => {
    // -> allTheBooksFromDB is a placeholder, it can be any word
    //console.log('Retrieved drones from DB:', allTheDronesFromDB);

    res.render('drones/list.hbs', { drones: allTheDronesFromDB});
  })
  .catch(error => {
    console.log('Error while getting the droness from the DB: ', error);

    // Call the error-middleware to display the error page to the user
    next(error);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  const { name, propellers , maxSpeed } = req.body;
  Drone.create({ name, propellers , maxSpeed })
  .then(() => res.redirect('/drones'))
  .catch(error => next(error));
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
   
    Drone.findById(id)
      .then(droneToEdit => {
        console.log(droneToEdit);
        res.render('drones/update-form.hbs', { drone: droneToEdit });
      })
      .catch(error => next(error));
});

/*router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;
    const {  name, propellers , maxSpeed  } = req.body;
   
    Drone.findByIdAndUpdate(droneId, {  name, propellers , maxSpeed  }, { new: true })
      .then(updatedDrone => res.redirect(`/drones/${updatedDrone.id}`)) // go to the details page to see the updates
      .catch(error => next(error));
  });*/
   
  

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
