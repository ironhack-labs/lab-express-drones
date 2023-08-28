const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(({ name, propellers, maxSpeed }) => {
      res.redirect("/drones");
    })
    .catch((e) => next(e));
});

//Edit
router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then((editDrone) => {
      res.render("drones/update-form.hbs", { drone: editDrone });
    })
    .catch((e) => next(e));
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then((updatedDrone) => {
      res.redirect(`/drones`);
    })
    .catch((e) => next(e));
});

router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((e) => next(e));
});

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((allDrones) => {
      console.log("drones", allDrones);
      res.render("drones/list.hbs", {
        drones: allDrones,
      });
    })

    .catch((e) => {
      console.log("an error has accured", e);
    });
});

module.exports = router;
