const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneModel = new Schema ({
    name: {
        type: String
    },
    propellers: {
        type : Number
    },
    maxSpeed: {
        type: Number
    }
})


const DroneModel= mongoose.model("drone", droneModel)
module.exports = DroneModel;
