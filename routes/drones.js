const express = require('express');

// require the Drone model here

const Drone = require("../models/Drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {

  // Iteration #2: List the drones
  // ... your code here
Drone.find()
    .then((allTheDronesFromDB) => {
      console.log(allTheDronesFromDB);
      res.render("drones/list.hbs", { drones: allTheDronesFromDB });
    })
    .catch((err) =>
      console.log(`Err while getting the books from the  DB: ${err}`)
    );
});

router.get('/drones/create', (req, res, next) => {
// Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed} = req.body;

  DroneModel.create({name, propellers, maxSpeed})
  .then(() => res.redirect('/drones'))
  .catch(error => 
    res.redirect('/drones') 
    `Error while creating a new drone: ${error}`);
});

router.get('/drones/:id/edit', (req, res, next) => {

  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  Drone.findById(id).then(droneToEdit => {
    res.render('drones/update-form', droneToEdit);
  })
    .catch(error =>
      console.log(`Error while getting a single drone for edit: ${error}`)
    );

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;

  Drone.findByIdAndUpdate(
    id,
    {name, propellers, maxSpeed},
    {new:true}
  )
  .then((updatedDrone) => res.redirect(`/drones`))
  .catch (error => console.log(`Error while updating a single drone: ${error}`));
});

router.post('/drones/:id/delete', (req, res, next) => {});
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
