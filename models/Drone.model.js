const { model, Schema } = require("mongoose");

const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

module.exports = model("Drone", droneSchema);
