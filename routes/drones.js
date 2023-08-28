const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model');
// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find()
      .then ((dronesFromDB) => {
        res.render("drones/list", {drones: dronesFromDB});
      })
      .catch (e => {
        console.log("error getting the list of drones from DB", e);
        next(e);
      });
  
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  Drone.create(newDrone)
    .then(() =>{
      res.redirect("/drones");
    })
    .catch (e => {
      console.log("error creating new drone", e);
      next(e);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
    const droneId = req.params.id;
    console.log(req.params.id)

    Drone.findById(droneId)
      .then(droneToEdit => {
        console.log(droneToEdit)
        res.render("drones/update-form", {drone: droneToEdit})
      })  
      .catch(e => next(e));
  })

router.post("/drones/:id/edit", (req, res, next) => {
  const droneId = req.params.id;
  const {name, propellers, maxSpeed} = req.body;


  Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed})
    .then(updatedDrone => {
        res.redirect("/drones");
    })
    .catch(e => next(e)); 
})



router.post("/drones/:id/delete", (req, res, next) => {
  const droneId = req.params.id;
  console.log("IM HERE!!")
  Drone.findByIdAndRemove(droneId)
      .then(() => res.redirect("/drones"))
      .catch(e => next(e));
});


module.exports = router;
