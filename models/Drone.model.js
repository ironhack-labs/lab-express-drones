const mongoos = require('mongoose')


const dronSchema = new mongoos.Schema({

    name: String,
    propellers: Number,
    maxSpeed: Number,
})


const Dron = mongoos.model('dron', dronSchema)


module.exports = Dron
