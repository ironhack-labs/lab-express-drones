require("../configs/db.config");
// Iteration #1
// dmder la co a la database

// require le model de data créé
// par convention la premiere lettre d'un model de donnéé prend une maj
const DroneModel = require("../models/Drone.model");

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  //   send drones throught DroneModel to database   
DroneModel.create(drones)
.then((dbres) => console.log(`${drones.length} drones has been input`))// .then((dbres) => DroneModel.close())
.catch((err) => console.log(err));
// drones model format la bdd si ok movie input sinon err msg 
//  node bin/seeds.js pour le run juste une fois (a la diff de nodemon kind of live server)