// Iteration #1
const dronesData = require('../data');
const mongoose = require('mongoose');
const express = require('express');
const Drone = require('../models/Drone.model');
const DB_URI = 'mongodb://localhost/express-drones-dev';

mongoose.connect(DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    Drone.create(dronesData)
    .then(() => {
        console.log(`${dronesData.length} inserted`)
        mongoose.disconnect();
    })
  })
  .catch(error => console.error('Error connecting to mongo', err))