const mongoose = require('mongoose');

let DroneSchema = new mongoose.Schema({

    name : {
        type : String,
        minlength :1
    },
    propellers : {
        type : Number,
        required : true
    },
    maxSpeed : {
        type : Number,
        required : true
    }
})

let DroneModel = mongoose.model('my-drone', DroneSchema);

module.exports = DroneModel;