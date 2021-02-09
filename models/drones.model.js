const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const droneSchema = new Schema(
  {
    name: {type:String,required:true},
    propellers: {type:Number,required:true},
    maxSpeed: {type:Number,required:true}
  },
  {
    timestamps: true,
  }
);

module.exports = model("Drones",droneSchema);
