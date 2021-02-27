const express = require('express');
const { Mongoose } = require('mongoose');
const { findById } = require('./../models/droneModel');

const droneModel = require("./../models/droneModel")

const router = express.Router();

router.get('/drones', (req, res, next) => {
  droneModel.find()
    .then(dronesFromdb => {
      res.render("list", { drones: dronesFromdb })
    })
    .catch((err) => {
      next(err)
    });
});

router.get('/drones/create', (req, res, next) => {
  res.render('create-form')
});

router.post('/drones/create', async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  try {
    await droneModel.create({
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }

});

router.get('/drones/:id/edit', (req, res, next) => {
  droneModel.findById(req.params.id)
    .then((drone) => {
      res.render('update-form', { drone })
    })
    .catch((err) => {
      next(err);
    })
});

router.post('/drones/:id/edit', async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  try {
    await droneModel.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    await droneModel.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (err) {
    next(err); 
  }
});

module.exports = router;
