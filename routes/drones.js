const express = require("express");
const DroneModel = require("./../models/Drone");
// require the Drone model here

const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((dbResult) => {
      res.render("drones/list.hbs", { title: "Drone List", drones: dbResult });
    })
    .catch((dbErr) => next(dbErr));
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
    .then(() => res.redirect("/drones"))
    .catch((err) => res.redirect("/drones/create"));
});

router.get("/drones/:id/edit", (req, res, next) => {
  DroneModel.findById(req.params.id)
    .then((drone) => {
      console.log("drones update");
      res.render("drones/update-form", drone);
    })
    .catch((err) => console.log(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  DroneModel.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
    .then((drone) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      const status = err.status || 500;
      console.log(status);
    })
});

module.exports = router;
