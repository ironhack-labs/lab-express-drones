const express = require('express');
const router = express.Router();
const DroneModel = require('../models/Drone.model.js');
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
  .then((allTheDronesFromDB) => {
    // -> allTheBooksFromDB is a placeholder, it can be any word
   // console.log("Retrieved drones from DB:", allTheDronesFromDB[0]._id)

    res.render("drones/list.hbs", { drones: allTheDronesFromDB })
  })
  .catch((error) => {
    console.log("Error while getting the books from the DB: ", error);

    // Call the error-middleware to display the error page to the user
    next(error);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  //console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;

  DroneModel.create({ name, propellers, maxSpeed })
    .then(droneFromDB => res.redirect('/drones'))
  .catch((error) => res.redirect('/drones/create'))
  })

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  
  DroneModel.findById(id)
  .then((theDrone) => res.render("drones/update-form.hbs", { drone: theDrone }))
  .catch((error) => {
    console.log("Error while retrieving drone details: ", error);

    // Call the error-middleware to display the error page to the user
    next(error);
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  DroneModel.findByIdAndUpdate(id,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then((updatedDrone) => res.redirect('/drones'))// go to the details page to see the updates
    .catch((error) => res.redirect('/drones/:id/edit'));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;

  DroneModel.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
  .catch(error => next(error))
});

module.exports = router;






