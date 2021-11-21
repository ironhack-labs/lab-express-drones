// Iteration #1
const { Schema, model } = require("mongoose");
// Define schema
const droneSchema = new Schema (
  {
    name:  {
      type: String,
      required: true,
    },
    propellers: Number,
    maxSpeed: Number,
  } 
);

// export the model
// model receives 2 arguments 
// --> name of the new Collection, Mongoose is going to make it plural
// --> name of the Schema created
module.exports = model("Drone", droneSchema);