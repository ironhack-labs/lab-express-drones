const Drone = require ("..//models/Drone.model");

module.exports.list = (req, res, next) => {
 Drone.find () 
 .then(drones => {
     res.render('drones/list', {drones})
 })
 .catch(error => console.log(error))
}

module.exports.create = (req, res, next) => {
    Drone.create(req.params.id)
    .then((movie) => {
        console.log(movie)
        res.render("movie", movie)
    })
    .catch(error => console.log(error))
}