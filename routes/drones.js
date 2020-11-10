const express = require("express");

const Drone = require("../models/Drone.model");

const router = express.Router();

router.get("/drones/list", (req, res, next) => {
  Drone.find()
    .then((droneDatabase) => {
      res.render("drones/list", { drones: droneDatabase });
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

  Drone.create({
    name,
    propellers,
    maxSpeed,
  })
    .then(() => res.redirect("/drones/list"))
    .catch((error) => `Error while creating a new book: ${error}`);
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;

  Drone.findById(id)
    .then((droneToEdit) => {
      res.render("drones/update-form", droneToEdit);
    })
    .catch((error) =>
      console.log(`Error while getting a drone for edit: ${error}`)
    );
});
router.post("/drones/:id/edit", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: name, propellers: propellers, maxSpeed: maxSpeed } }
  )
    .then(() => res.redirect("/drones/list"))
    .catch((err) => console.error(err));
});

router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones/list"))
    .catch((error) => console.log(`Error while deleting a drone: ${error}`));
});

module.exports = router;
