const express = require("express");
const router = express.Router();

// require the Drone model here

const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allDrones) => {
      res.render("drones/list", {
        allDrones,
      });
    })
    .catch((err) => {
      console.log("Drones stuck in tree");
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, maxSpeed, propellers } = req.body;
  Drone.create({
    name,
    maxSpeed,
    propellers,
  })
    .then((response) => res.redirect("/drones"))
    .catch(() =>
      console.log("Drone factory mishap, you have a toy aeroplane now")
    );
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {
    id
  } = req.params
  Drone.findById(id).then((drone) => {
    res.render('drones/update-form', {
      drone
    })
  }).catch((err) => console.log('whoopsie!'))

});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {
    id
  } = req.params

  const { name, maxSpeed, propellers } = req.body;
  Drone.findByIdAndUpdate(id, {
      name,
      maxSpeed,
      propellers,
    })
    .then((response) =>
      res.redirect('/drones'))
    .catch(() => console.log('infos not transmitted'))
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {
    id
  } = req.params

  Drone.findByIdAndRemove(id)
    .then((result) => {
      res.redirect('/drones')
    }).catch((err) => {
      console.log('very destructive')
    });
});

module.exports = router;
