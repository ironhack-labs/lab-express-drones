const express = require("express");
const DroneModel = require("./../models/Drone.model.js");
const mongoose = require("mongoose");
// require the Drone model here

const router = express.Router();

router.get("/drones", (req, res, next) => {
  DroneModel.find()
    .then((dbRes) => {
      res.render("drones/list.hbs", {
        list: dbRes,
      });
    })
    .catch((dbError) => {
      res.send(dbError);
    });
});

router.get("/drones/create", (req, res, next) => {
  DroneModel.find()
    .then((dbRes) => {
      res.render("drones/create-form");
    })
    .catch((dbError) => {
      next(dbError);
    });
});

router.post("/drones/create", async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  try {
    await DroneModel.create({
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.get("/drones/:id/edit", (req, res, next) => {
  DroneModel.findById(req.params.id)
    .then((drone) => {
      console.log(drone);
      res.render("drones/update-form", { drone });
    })
    .catch((dbError) => {
      next(dbError);
    });
});

router.post("/drones/:id/edit", async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  try {
    await DroneModel.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  try {
    await DroneModel.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
