const express = require('express');

const DroneModel = require("./../models/Drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((dbResult) => {
      res.render("drones/list", { title: "Drones", drones: dbResult });
    })
    .catch((dbErr) => {
      console.log(dbErr);
      next(dbErr);
    });
});

router.get('/drones/create', function (req, res, next) {
  res.render("drones/create-form", { title: "Create Drone" } )
});

router.post('/drones/create', (req, res, next) => {
  DroneModel.create(req.body)
    .then((dbResult) => {
      res.redirect("/drones");
    })
    .catch((dbErr) => {
      res.redirect("/drones/create");
      next(dbErr);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  DroneModel.findById(req.params.id)
  .then((dbResult) => {
    res.render("drones/update-form", { title: "Update Drone",
      drone: dbResult,
    });
  })
  .catch((dbErr) => next(dbErr));
});

router.post('/drones/:id/edit', (req, res, next) => {
  DroneModel.findByIdAndUpdate(req.params.id, req.body)
    .then((dbResult) => {
      res.redirect("/drones");
    })
    .catch((dbErr) => {
      res.redirect("/drones/:id/edit");
      next(dbErr);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
    .then((dbSuccess) => {
      res.redirect("/drones");
    })
    .catch((dbErr) => {
      next(dbErr);
    });
});

module.exports = router;
