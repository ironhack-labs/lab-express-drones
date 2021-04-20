const express = require('express');
const mongoose = require('mongoose');
// require the Drone model here
const Drone = require("../models/Drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone
    .find({})
    .then((resultsFromDB) => {
      res.status(200).render("drones/list", {drones: resultsFromDB})
    })
    .catch((err) => {
      console.error(`Error occured while finding drones ${err}`)

      next(err)
    })
});

router.get('/drones/create', (req, res, next) => {
  res.status(200).render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  Drone
    .create({ name, propellers, maxSpeed})
    .then((resultsFromDB) => {
      res.status(200).redirect("/drones")
    })
    .catch((err) => {
      console.error(`Error occured while creating drones ${err}`);
      res.redirect("drones/create")

      next(err)
    })
});



router.get('/drones/:_id/edit', (req, res, next) => {
  Drone.findById(req.params._id)
    .then((result) => {
      res.status(200).render('drones/update-form', result)
    })
    .catch((error) => {
      res.redirect(`/drones/${req.params._id}/edit`)
    })
})

router.post('/drones/:_id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params._id, req.body)
    .then((result) => {
      res.status(200).redirect('/drones')
    })
    .catch((err) => {
      console.error(`Error occured while editing the drone: ${err}`);
      res.redirect(`/drones/${req.params._id}/edit`)
    })
})

router.post('/drones/:_id/delete', (req, res, next) => {

  Drone.
    findByIdAndDelete(req.params._id)
    .then((result) => {
      res.status(200).redirect('/drones')
    })
    .catch((err) => {
      console.error(`Error occured while deleting the drone: ${err}`);
      res.redirect(`/drones/${req.params._id}/delete`);

      next(err);
    })
});

module.exports = router;
