const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model.js");

router.get("/drones",  (req, res, next) => {
  Drone.find()
  .then(droneArray => {
    const data = {
      drones: droneArray
    }
    res.render("./drones/list", data);
  })
  .catch(e => {
    console.log("error getting books from DB", e);
    next(e);
  });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
    const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.create(newDrone)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((e) => {
      console.log("Error to display list of drones", e);
    });
});


router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then(droneFromDb=>{
    res.render("drones/update-form",droneFromDb);
  })
  .catch((e) => {
    console.log("Error to display list of drones", e);
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.findByIdAndUpdate(req.params.id,newDrone)
  .then(()=>{
    res.redirect("/drones")
  })

  .catch((e) => {
    console.log("Error to display list of drones", e);
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect("/drones")
  })
  .catch((e) => {
    console.log("Error to display list of drones", e);
  });
});

module.exports = router;
