const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed:Number,
});
// On crée un model de formatage de la donnée
// pour cela nous avons besoin de mongoose et sa methode Schema

// on crée une constante qui execute le model qu'on a crée et l'applique à "drones"(the collection name)
const DroneModel = mongoose.model("drones", droneSchema);

// on rend ce resultat disponible pour les autres éléments du code
module.exports = DroneModel;