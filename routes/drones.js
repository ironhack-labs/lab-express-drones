const express = require('express');

// require the Drone model here
const DroneModel = require("../models/drone");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => {
      res.render("./drones/list.hbs", {drones})
    })
      .then(() => console.log("see the list of drones!!!"))
      .catch((err) => next(err));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("./drones/create-form.hbs")
});

router.post('/drones/create-one', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  DroneModel.create({
    name,
    propellers,
    maxSpeed
  })
    .then((drone) => {
      res.render("./drones/drone-added");
      console.log(`The following has been added to the database: ${drone}`)})
    .catch((err) => console.log(err));
});

router.get("/drones/drone-added", (req, res, next) => {
  res.render("../views/drones/drone-added.hbs")
});

router.get('/drones/:id([a-z0-9]{24})/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((drone) => {
      console.log(drone)
    res.render("../views/drones/update-form", drone)
    })
    .catch((err) => next(err));
});

router.post('/drones/:id([a-z0-9]{24})/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed
    })
    . then( () => {
      DroneModel.find()
        .then(() =>
          res.redirect("/"))
        .catch((err) => err);
    })
    .catch((err) => next(err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
