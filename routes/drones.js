const express = require("express");

const DroneModel = require("../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  DroneModel.find()
    .then((drones) => {
      console.log(drones);
      res.render("drones/list.hbs", { drones }); //rendering inside then
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  DroneModel.create(req.body) //the parsed data is in same form as needed for .create i.e. object
    .then(() => {
      console.log("Data Added");
      res.redirect("/drones"); //redirects after data added from create
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  let id = req.params.id;
  DroneModel.findById(id).then((drone) => {
    res.render("drones/update-form.hbs", { drone });
  });
});

router.post("/drones/:id/edit", (req, res, next) => {
  let id = req.params.id;
  DroneModel.findByIdAndUpdate(id, {$set: req.body})
  .then(() => {
    res.redirect('/drones')
  })
});

router.get("/drones/:id/delete", (req, res, next) => {
  let id = req.params.id; 
  DroneModel.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/drones')
  })
});

module.exports = router;
