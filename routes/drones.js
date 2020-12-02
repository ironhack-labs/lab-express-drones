const express = require("express");

const Drone = require("../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  Drone.find({})
    .then((dronesFromDB) => {
      res.render("drones/list", { drones: dronesFromDB });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => console.log(error), res.render("drones/create-form"));
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id).then((editDrone) => {
    res.render("drones/update-form", editDrone);
  });
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(() => res.redirect("/drones"))
    .catch((error) => console.log(error));
}) ;
router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
  .then(() => res.redirect("/drones"))
  .catch((error) => console.log(error));
});


module.exports = router;
