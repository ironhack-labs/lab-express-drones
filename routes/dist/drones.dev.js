"use strict";

var express = require('express'); // require the Drone model here


var router = express.Router();

var Drone = require('../models/Drone.model');

router.get('/drones', function (req, res, next) {
  // Iteration #2: List the drones
  Drone.find().then(function (allTheDronesFromDB) {
    res.render('drones/list', {
      drones: allTheDronesFromDB
    });
  })["catch"](function (error) {
    return console.log('Error while getting the books from the DB: ', error);
  });
});
router.get('/drones/create', function (req, res, next) {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});
router.post('/drones/create', function (req, res, next) {
  // Iteration #3: Add a new drone
  // console.log(req.body);
  var _req$body = req.body,
      name = _req$body.name,
      propellers = _req$body.propellers,
      maxSpeed = _req$body.maxSpeed;
  Drone.create({
    name: name,
    propellers: propellers,
    maxSpeed: maxSpeed
  }).then(function () {
    return res.redirect('/drones');
  })["catch"](function (error) {
    return "Error while creating a new drone: ".concat(error);
  });
});
router.get('/drones/:id/edit', function (req, res, next) {
  // Iteration #4: Update the drone
  var id = req.params.id;
  Drone.findById(id).then(function (dronesToEdit) {
    // console.log(dronesToEdit);
    res.render('drones/update-form', dronesToEdit); // <-- add this line
  })["catch"](function (error) {
    return console.log("Error while getting a single drone for edit: ".concat(error));
  });
});
router.post('/drones/:id/edit', function (req, res, next) {
  // Iteration #4: Update the drone
  var id = req.params.id;
  var _req$body2 = req.body,
      name = _req$body2.name,
      propellers = _req$body2.propellers,
      maxSpeed = _req$body2.maxSpeed;
  Drone.findByIdAndUpdate(id, {
    name: name,
    propellers: propellers,
    maxSpeed: maxSpeed
  }, {
    "new": true
  }).then(function (updatedDrone) {
    return res.redirect("/drones");
  })["catch"](function (error) {
    return console.log("Error while updating a single book: ".concat(error));
  });
});
router.post('/drones/:id/delete', function (req, res, next) {
  // Iteration #5: Delete the drone
  var id = req.params.id;
  Drone.findByIdAndDelete(id).then(function () {
    return res.redirect('/drones');
  })["catch"](function (error) {
    return console.log("Error while deleting a drone: ".concat(error));
  });
});
module.exports = router;