const express = require('express');
const Drone = require("../models/Drone")
const router = express.Router();

router.get('/drones', (req, res, next) => {
  
  Drone.find({})
  .then( resultFindDrones => {

    res.status(200).render("drones/list", { droneObj: resultFindDrones })
  })
  .catch( err => {
    console.log(`error to find the drones: ${err}`);

    next(err);
  })
});

router.get('/drones/create', (req, res, next) => {

  res.status(200).render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  
  const { droneName, dronePropellers, droneMaxSpeed } = req.body;

  Drone.create({ name: droneName, propellers: dronePropellers, maxSpeed: droneMaxSpeed })

  .then( resDroneCreate => {
    
    res.status(200).render("drones/drone-created", { newDrone: resDroneCreate});
  })
  .catch( err => {
    
    res.status(404).render("error", err);

    next(err);
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  
  const { id } = req.params;
  
  Drone.findById(id)
  .then( (resDroneId) => {
    
    res.status(200).render("drones/update-form", { droneObj: resDroneId });
  })
  .catch( err => {
    console.error(`Error when finding drone by Id: ${err}`);

    next(err);
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { droneName, dronePropellers, droneMaxSpeed } = req.body;
  //findByIdAndUpdate(incomingID, valuesToChange, booleanValue)
  Drone.findByIdAndUpdate(
    id, 
    { name: droneName, propellers: dronePropellers, maxSpeed: droneMaxSpeed}, 
    { new: true}
  )
  .then( (resDroneFromDB) => {
    res.status(200).redirect(`drones/${resDroneFromDB.id}`);
  })
  .catch( err => {
    console.error(`Error when finding drone by Id: ${err}`);

    next(err);
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  
  Drone.findByIdAndDelete(id)
  .then(() => {
    res.redirect("/drones/list");
  })
  .catch( err => {
    console.error(`Error... cannot delete... ${err}`)

    next(err);
  })
});

module.exports = router;
