const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema= new Schema({
name:{
    type: String,
    propellers: Number,
    maxSpeed: Number
},

})


module.exports= model("drone",droneSchema)