// Iteration #1

const mongoose  =  require("mongoose")
const Schema = mongoose.Schema;

//Modelo de drone
const DroneShema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
}, {
    timestamps: true
})


const Drone = mongoose.model("Drone", DroneShema)

//Exportamos nuesto modelo Libro

module.exports = Drone