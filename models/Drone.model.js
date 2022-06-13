// Iteration #1

const {Schema,model,SchemaType} = require ("mongoose")

const droneShema = new Schema ({

name:String,
propellers:Number,
maxSpeed:Number


},{timestamps:true})

module.exports = model("DRONE",droneShema)