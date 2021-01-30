const moongoose = require('mongoose');

const { Schema, model } = moongoose;

const droneSchema = new Schema (
    {
        name: String,
        propellers: String,
        maxSpeed: Number,
    }
);

  module.exports = model ('Drone', droneSchema)