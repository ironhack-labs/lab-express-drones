// Iteration #1
require('./../configs/db.config');

const dataSet = [
	{
		name: 'Kzr-2000',
		propellers: 12,
		maxSpeed: 15
	},
	{
		name: 'Phantom-3112',
		propellers: 16,
		maxSpeed: 14
	},
	{
		name: 'ConflictT2000',
		propellers: 12,
		maxSpeed: 13
	}
];

const droneModel = require('./../models/Drone.model.js');

droneModel.create(dataSet)
	.then((dbSuccess) => {
		console.log(dbSuccess);
	})
	.catch((dbError) => {
		console.log(dbError);
	});

mongoose.connection.close();
