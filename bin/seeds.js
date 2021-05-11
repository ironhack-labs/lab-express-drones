// bin/seeds.js

const mongoose = require('mongoose');
const Dron = require('../models/Drones.models');

const DB_NAME = 'express-drones-dev';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const drones = [{
        name: 'Creeper XL 500',
        propellers: 3,
        maxSpeed: 12
    },
    {
        name: 'Racer 57',
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: 'Courier 3000i',
        propellers: 6,
        maxSpeed: 18
    }
];

Dron.create(drones)
    .then(booksFromDB => {
        console.log(`Created ${booksFromDB.length} dron`);

        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));
