const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model.js")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => {
      res.render("drones/list", { drones });
      console.log("drones were created")
    })
    .catch((e) => next(e));

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/createForm");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);

  Drone.create(req.body)
    .then((drone) => {
      res.redirect(`/drones`);
    })
    .catch((e) => next(e));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then((drone) => {
    res.render("drones/updateForm", drone);
  })
  .catch((e) => next(e));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findByIdAndUpdate(req.params.id, req.body)
  .then((drone) => {
    res.redirect(`/drones`);
  })
  .catch((e) => next(e));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones");
  })
  .catch((e) => next(e));
});

module.exports = router;
