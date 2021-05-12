const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const droneSchema = new Schema (
    {
        name : String,
        image: {
            type: String,
            default: '/images/puffgirls.png'
        }, 
        propellers : {
            type : Number, min: [1, `you can't fly without propellers`]
        },
        maxSpeed : {
            type : Number, min: [1, `less than 1 and you're not moving at all`]
        }
    },
    {
    timestamps: true,
    }
);

module.exports = model('Drone', droneSchema);