const express = require('express');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  Drone.find()
    .then(allTheDronesFromDB => {
      console.log('Retrieved drones from DB:', allTheDronesFromDB);
      res.render('drones/list.hbs', { drones: allTheDronesFromDB });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

   const { name, propellers, maxSpeed } = req.body;

   Drone.create({ name, propellers, maxSpeed })
     .then(() => res.redirect("/drones"))
     .catch((error) => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

 const { droneId } = req.params;

  Drone.findById(droneId)
    .then((droneToEdit) => {
    res.render("drones/update-form.hbs", { drone: droneToEdit });
    })
    .catch((error) => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  const { droneId } = req.params;
  const { name, propellers, maxSpeed } = req.body;
 
  Drone.findByIdAndUpdate(droneId, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrone => res.redirect(`/drones/${updatedDrone.id}`)) 
    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here

  const { droneId } = req.params;

  Drone.findByIdAndDelete(droneId)
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

module.exports = router;
