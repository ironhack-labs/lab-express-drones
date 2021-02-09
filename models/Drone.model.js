const mongoose = require('mongoose');
const {Schema,model} = mongoose 

const droneSchema = new Schema({
    name : String,
    propellers : Number,
    maxSpeed : {
        type : Number,
        max:18
    }

})

module.exports = model('perrosDrone', droneSchema); // minuscula es el nombre del archivo en plural