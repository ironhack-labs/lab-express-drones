const express = require("express");

const drone = require("../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  drone
    .find({})
    .then((data) => {
      res.render("drones/list", { data });
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  drone
    .create({
      name,
      propellers,
      maxSpeed,
    })
    .then((data) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/drones/create");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  drone
    .findById(req.params.id)
    .then((data) => {
      res.render("drones/update-form", data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  drone
    .findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { name, propellers, maxSpeed } },
      { new: true }
    )
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/drones/:id/edit");
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  drone
    .deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
      //res.redirect('/drones')
    });
});

module.exports = router;
