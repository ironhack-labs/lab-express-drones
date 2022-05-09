const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find({})
    .then((drones) => {
      console.log(drones);
      res.render("drones/list.hbs", { drones });
    })

    .catch((err) => next(err));
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, speed } = req.body;

  Drone.create({ name, propellers, speed })
    .then(() => res.redirect("/drones"))
    .catch((err) => next(err));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone

  const { id } = req.params;
  Drone.findById(id)
    .then((drones) => {
      res.render("drones/update-form", drones);
    })

    .catch((err) => next(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, speed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, speed })
    .then((drones) => {
      res.redirect(`/drones/`);
    })
    .catch((err) => next(err));
});

router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndRemove(id)
    .then(() => res.redirect("/drones"))
    .catch((err) => next(err));
});

module.exports = router;
