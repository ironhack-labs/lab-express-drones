"use strict";

// Iteration #1
var mongoose = require("mongoose");

var Drone = require("../models/Drone.model");

var DB_NAME = "express-drone-dev";
mongoose.connect("mongodb://localhost/".concat(DB_NAME), {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var drones = [{
  name: 'Creeper XL 500',
  propellers: 3,
  maxSpeed: 12
}, {
  name: 'Racer 57',
  propellers: 4,
  maxSpeed: 20
}, {
  name: 'Courier 3000i',
  propellers: 6,
  maxSpeed: 18
}];
Drone.create(drones).then(function (dronesFromDB) {
  console.log("Created ".concat(dronesFromDB.length, " movies"));
  mongoose.connection.close();
})["catch"](function (err) {
  return console.log("An error occurred while getting drones from the DB: ".concat(err));
});