const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    propellers: { type: Number, required: true },
    maxSpeed: { type: Number, required: true },
    image: {
      type: String,
      default:
        "https://img.freepik.com/vetores-gratis/drone-com-design-pixel-art_475147-5.jpg",
    },
    rating: Number,
    price: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Drone", droneSchema);
