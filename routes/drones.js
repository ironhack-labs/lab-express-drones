const express = require('express');
const router = express.Router();

// require the Drone model here
// const DroneModel = require('../models/Drone.model');
const Drone = require('../models/Drone.model')


//GET /drones
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allTheDronesFromDB) => {
      console.log('Retrieved drones from DB:', allTheDronesFromDB)
      res.render('drones/list', { allDrones: allTheDronesFromDB })
    })
    .catch((err) => {
      console.log('error with finding DroneDB', err)
    });
});


//GET /drones/create
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form',)
});

//POST /drones/create --> accesses the user input in the form through req.body
router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;

  //Drone.create({ title: req.body.title, propellers: req.body.propellers, maxSpeed: req.body.maxSpeed })

  Drone.create({ name, propellers, maxSpeed })
    .then(res.redirect('/drones'))
    .catch((error) => console.log(`Error while creating a new book: ${error}`),
      res.redirect("drones/create"))
})

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then(droneToEdit => {
      //console.log(droneToEdit)
      res.render('drones/update-form', droneToEdit);
    })
    .catch(error => console.log(`Error while updating a single drone: ${error}`))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(
    req.params.id,
    { name, maxSpeed, propellers },
    { new: true }
  )
    .then(res.redirect('/drones'))
    .catch(error => console.log(`Error while editing the drone data: ${error}. Try again.`),
      res.redirect("drones/:id/edit"))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params;
  Drone.findByIdAndRemove(id)
  .then(res.redirect('/drones'))
  .catch(error => console.log(`Error deleting this drone. Maybe its currently on a mission and cant't be called back `))
});

module.exports = router;
