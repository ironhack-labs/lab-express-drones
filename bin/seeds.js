// Iteration #1
const Drone = require('../models/Drone.model')
//connects to the database require
require("../configs/db.config")
const drones = [
    {
        name: 'DJI Mavic 2',
        propellers: 4,
        maxSpeed: 65.4,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81xExfFNShL._AC_SL1500_.jpg'
    },
    {
        name: 'DJI Mini 2',
        propellers: 4,
        maxSpeed: 57.6,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61QAqWw3u7L._AC_SL1500_.jpg'
    },
    {
        name: 'Altair Aerial Aa300',
        propellers: 4,
        maxSpeed: 40.5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51jiXnMgnDL._AC_SL1000_.jpg'
    },
    { 
        name: 'Creeper XL 500', 
        propellers: 3, 
        maxSpeed: 12,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51QmadWuylL._AC_SL1000_.jpg'
    },
    { 
        name: 'Racer 57', 
        propellers: 4, 
        maxSpeed: 20,
        image: 'https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/17/34/4b785953-4d9c-433c-a91d-7e3917a64bdd.jpg.webp' 
    },
    { 
        name: 'Courier 3000i', 
        propellers: 6, 
        maxSpeed: 18,
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_964382-MLM45787929347_052021-F.webp' 
    }
]
Drone.create(drones)
    .then(dbDrones => {
        console.log(`Created ${dbDrones.length} drones`)
        mongoose.connection.close()
    })
    .catch(e => console.log(`An error ocurred while creating drones in the DB`))