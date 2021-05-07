const express = require('express');

const DroneModel = require("./../models/Drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((dbResult) => {
      res.render("drones/list", { title: "Drones", drones: dbResult });
    })
    .catch((dbErr) => {
      console.log(dbErr);
      next(dbErr);
    });
});

router.get('/drones/create', function (req, res, next) {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  DroneModel.create(req.body)
    .then((dbResult) => {
      res.redirect("/drones");
    })
    .catch((dbErr) => {
      res.redirect("/drones/create");
      next(dbErr);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
