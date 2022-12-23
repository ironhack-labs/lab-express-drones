const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((dronesfromDB) => {
      console.log(dronesfromDB);
      res.render("drones/list", { dronesfromDB });
    })
    .catch((err) => {
      console.log(`Error displaying drones: ${err}`);
    });
});

router.get("/drones/create", (req, res) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res) => {
  Drone.create(req.body)
    .then((item) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  Drone.findById(req.params.id)
  .then(item => {
    res.render('drones/update-form', {item});
  })
  .catch(err => {console.log(`Error: ${err}`)});
});

router.post("/drones/:id/edit", (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(newDetails => {
      res.redirect(`/drones/list`);
    })
    .catch(err => {console.log(`Error: ${err}`)});
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
