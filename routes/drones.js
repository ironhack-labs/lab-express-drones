const express = require("express");
const router = express.Router();

const Dron = require("./../models/Drone.model");

router.get("/drones", (req, res, next) => {
  Dron.find()
    .then((foundDrones) => {
      res.render("drones/list", { foundDrones });
    })
    .catch((err) => console.log(err));
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Dron.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((err) => console.log(err));
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Dron.findById(id)
    .then((dron) => res.render("drones/update-form", dron))
    .catch((err) => console.log(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  const { id } = req.params;
  Dron.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((err) => console.log(err));
});

router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Dron.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((err) => console.log(err));
});

module.exports = router;
