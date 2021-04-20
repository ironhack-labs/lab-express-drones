// Iteration #1
const express = require('express');
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  mongoose
    .connect('mongodb://localhost/starter-code', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        return Drone.insertMany(drones)
            .then(addedDrone => {
                console.log(`Added drones: ${addedDrone.length}`);

                return mongoose.connection.close();
            })
    })
    .then(() => console.log("Connection closed"))
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });