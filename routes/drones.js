const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(dronesArr => {

      const data = {
        drones: dronesArr
      };

      res.render("drones/list", data);
    })
    .catch(e => {
      console.log("error getting drone from DB", e);
      next(e);
    });
});



  // Iteration #3: Add a new drone
  router.get("/drones/create", (req, res, next) => {
    res.render("drones/create-form");
  });


router.post("/drones", (req, res, next) => {
  
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
    };
    Drone.create(newDrone)
      .then(() =>{
        res.redirect("/drones");
      })
      .catch((e) =>{
        console.log("Error occured while displaying Drones", e);
      })
});





router.get('/drones/:id/edit', (req, res, next) => {
 const droneId = req.params.id;
  Drone.findById(droneId)
    .then((droneToEdit) => {
      res.render('drones/update-form', {drone: droneToEdit });
    })
    .catch(e => {
      console.error(`Error displaying drones data`, e);
      next(e);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  
   const droneId = req.params.id;
    const data = {
    name: req.body.name, 
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  console.log(data);
  Drone.findByIdAndUpdate(droneId, data, { new: true })
    .then((response) => {
      res.redirect('/drones')
    })
    .catch(e => {
      console.error(`Error updating Drone: ${e}`);
      next(e);
    });
});






router.post('/drones/:id/delete', (req, res, next) => {

  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/drones')
  })
  .catch(e => {
    console.error('Error deleting the drone: ', e);
  });
});

module.exports = router;
