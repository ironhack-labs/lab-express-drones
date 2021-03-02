// Iteration #1
require("../configs/db.config")

const dronesModel = require("../models/Drone.model")


const dronesArray = [{
    name: "General Atomics MQ-9 Reape",
    propellers: 4,
    maxSpeed: 482


},
{
    name: "Northrop Grumman X-47B",
    propellers: 2,
    maxSpeed: 862
},
{
    name: "General Atomics Avenger",
    propellers: 4,
    maxSpeed: 674
}];

dronesModel.create(dronesArray)
    .then((droneRes) => {
        console.log(droneRes);
    }
    )
    .catch((error) => {
        console.log(error);
    })

  


