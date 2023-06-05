const express = require("express");
const router = express.Router();
// require the Drone model here
const Drone = require("../models/Drone.model");
router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((dronesFromDB) => {
      /* console.log(dronesFromDB); */
      res.render("drones/list", { drones: dronesFromDB });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.create(newDrone)
    .then(() => {
      res.redirect("/drones");
    })
    .catch(() => {
      res.render("/drones/create");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  Drone.findById(req.params.id)
    .then((droneById) => {
      res.render("drones/update-form", { id: droneById });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(() => {
      res.redirect("/drones");
    })
    .catch((updatedDrone) => {
      res.redirect(`/drones/${updatedDrone.id}/edit`);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch(() => {
      res.redirect("/drones");
    });
});

module.exports = router;
