// Iteration #1

const {Shema,model} = requiere('mongoose');
const bookSchema = new Shema({

    name: String,
    propellers: Number,
    MaxSpeed:Number
},
{timestamps: true
}
);

module.exports= model('Drone', DroneSchema);