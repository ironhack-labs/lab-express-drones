const express = require("express");
const router = express.Router();

const DroneModel = require("../models/Drone.model");

//LIST ALL DRONES
router.get("/drones", (req, res, next) => {
  DroneModel.find()
    .then((allDrones) => {
      res.render("drones/list.hbs", {allDrones});
    })
    .catch((err) => {
      next("Listing Drones Failed");
    });
});

//CREATE FORM
router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs")
});

router.post("/drones/create", (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  DroneModel.create({name, propellers, maxSpeed})
  .then((result) => {
    res.redirect('/drones')
  })
  .catch((err) => {
    next('Adding Drone Failed', err)
   });
});

router.get("/drones/:id/edit", (req, res, next) => {
  const passedId = req.params.id

  DroneModel.findById(passedId)
  .then((singleDrone) => {
    res.render("drones/update-form.hbs", {singleDrone})
  }).catch((err) => {
    next('Cannot find drone with that ID')
  });
  
});

router.post("/drones/:id/edit", (req, res, next) => {
  const passedId = req.params.id;
  const {name, propellers, maxSpeed} = req.body;
  
  DroneModel.findByIdAndUpdate(passedId,{name, propellers, maxSpeed})
  .then((result) => {
    res.redirect('/drones')
  }).catch((err) => {
    next('Updating Drone Failed')
  });
});

router.post("/drones/:id/delete", (req, res, next) => {
const passedId = req.params.id;

DroneModel.findByIdAndDelete(passedId)
.then((result) => {
  res.redirect('/drones')
}).catch((err) => {
  next('Deleting Drone Failed')
});
});

module.exports = router;
