var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('../configs/db.config.js');


var DroneSchema = new Schema({
    name: {
        type: String
    },
    propellers: {
        type: Number,
    },
    maxSpeed: {
        type: Number
    }
});


var Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;