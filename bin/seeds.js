// Iteration #1
require("./../configs/db.config")
const DroneModel = require("./../models/DroneModel")

const drone = [
    {
        name: "DroneNumber1",
        propellers: 2,
        maxSpeed: 15
    },
    {
        name: "DroneNumber2",
        propellers: 3,
        maxSpeed: 20
    },
    {
        name: "DroneNumber3",
        propellers: 4,
        maxSpeed: 25
    }
]

DroneModel.create(drone)
.then(droneDocument => {
    console.log(`${drone.length} drones are added`);
})
.catch(error => {
    console.log("The drone can't be added...");
})