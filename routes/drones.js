const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
Drone.find()
    .then((droneList) => {
      res.render('drones/list.hbs', {
        drones: droneList
      });
    })

    .catch(e => console.log(e))
  
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
Drone.create(req.body)
    .then(() => {
      res.redirect('/drones');

    })

    .catch(e => console.log(e))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  //Drone.findOneAndUpdate
Drone.findById(req.params.id)
    .then((oneDrone) => {
    res.render('drones/update-form.hbs', {
      drone: OneDrone
    })
})

    .catch(e => console.log(e))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
Drone.findbyIdAndUpdate(req.params.id, req.body)
.then(() => {
    res.redirect('/drones')
})

.catch(e => console.log(e))
  res.redirect('/drones' + req.params.id + '/edit')
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones");
  })
  .catch(e => console.log(e))
});

module.exports = router;
